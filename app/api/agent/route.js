import { getAnthropic, AGENT_MODEL, AGENT_SYSTEM_PROMPT } from "@/lib/ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 2000;

function jsonError(message, status = 400) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid body");
  }

  const messages = Array.isArray(body.messages) ? body.messages : null;
  if (!messages || messages.length === 0) {
    return jsonError("messages required");
  }

  const cleaned = messages
    .slice(-MAX_MESSAGES)
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, MAX_MESSAGE_CHARS).trim(),
    }))
    .filter((m) => m.content.length > 0);

  if (cleaned.length === 0 || cleaned[0].role !== "user") {
    return jsonError("First message must be from the user");
  }

  // Mark the last user message for prompt-cache lookup on multi-turn conversations.
  // Below ~4096 tokens this is a no-op on Opus 4.7, but ready for longer chats.
  for (let i = cleaned.length - 1; i >= 0; i--) {
    if (cleaned[i].role === "user") {
      cleaned[i] = {
        ...cleaned[i],
        content: [
          {
            type: "text",
            text: cleaned[i].content,
            cache_control: { type: "ephemeral" },
          },
        ],
      };
      break;
    }
  }

  let anthropic;
  try {
    anthropic = getAnthropic();
  } catch (err) {
    return jsonError(err.message, 500);
  }

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        const apiStream = anthropic.messages.stream({
          model: AGENT_MODEL,
          max_tokens: 4096,
          output_config: { effort: "medium" },
          system: [
            {
              type: "text",
              text: AGENT_SYSTEM_PROMPT,
              cache_control: { type: "ephemeral" },
            },
          ],
          messages: cleaned,
        });

        apiStream.on("text", (delta) => {
          controller.enqueue(encoder.encode(delta));
        });

        await apiStream.finalMessage();
        controller.close();
      } catch (err) {
        console.error("[agent] error", err);
        const msg = err?.message || "Agent error";
        controller.enqueue(encoder.encode(`\n\n[error: ${msg}]`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
