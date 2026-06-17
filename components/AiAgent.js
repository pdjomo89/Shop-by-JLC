"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/components/LanguageProvider";

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M4 12l16-8-6 16-3-7-7-1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AiAgent() {
  const { t } = useT();
  const a = t.agent;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, streaming]);

  useEffect(() => () => abortRef.current?.abort(), []);

  if (!a) return null;

  const send = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;
    setError(null);

    const next = [...messages, { role: "user", content: trimmed }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantText += chunk;
        setMessages((current) => {
          const copy = current.slice();
          const last = copy[copy.length - 1];
          if (last && last.role === "assistant") {
            copy[copy.length - 1] = { ...last, content: assistantText };
          }
          return copy;
        });
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
        setMessages((current) => current.slice(0, -1));
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setInput("");
    setError(null);
  };

  return (
    <section
      id="agent"
      className="relative overflow-hidden border-t border-ink-100 bg-gradient-to-br from-brand-100 via-brand-50/50 to-accent-100 py-20 sm:py-28"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
            <SparkIcon />
            {a.badge}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {a.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{a.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-ink-800">{a.benefitsTitle}</h3>
              <ul className="space-y-4 text-sm text-ink-600">
                {a.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={[
                        "mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-lg",
                        i % 2 === 0
                          ? "bg-brand-50 text-brand-600"
                          : "bg-accent-50 text-accent-600",
                      ].join(" ")}
                    >
                      <SparkIcon />
                    </span>
                    <div>
                      <div className="font-semibold text-ink-800">{b.title}</div>
                      <div className="mt-1 text-ink-500">{b.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink-400">{a.poweredBy}</p>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="flex h-[36rem] flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft">
              <header className="flex items-center justify-between border-b border-ink-100 bg-gradient-to-r from-brand-50 via-white to-accent-50 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                  <span className="text-sm font-semibold text-ink-800">
                    {a.chatTitle}
                  </span>
                </div>
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={reset}
                    className="text-xs font-medium text-ink-400 transition hover:text-ink-700"
                  >
                    {a.reset}
                  </button>
                )}
              </header>

              <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
                {messages.length === 0 ? (
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-sm text-ink-500">{a.intro}</p>
                      <p className="mt-3 text-xs font-medium uppercase tracking-wider text-ink-400">
                        {a.tryLabel}
                      </p>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {a.quickPrompts.map((p, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => send(p)}
                            className={[
                              "rounded-xl border p-3 text-left text-sm text-ink-700 transition",
                              i % 2 === 0
                                ? "border-brand-200 bg-brand-50/60 hover:border-brand-500 hover:bg-brand-50"
                                : "border-accent-200 bg-accent-50/60 hover:border-accent-500 hover:bg-accent-50",
                            ].join(" ")}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  messages.map((m, i) => (
                    <div
                      key={i}
                      className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                    >
                      <div
                        className={[
                          "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-6",
                          m.role === "user"
                            ? "bg-brand-500 text-white"
                            : "bg-ink-50 text-ink-800",
                        ].join(" ")}
                      >
                        {m.content || (
                          <span className="inline-flex items-center gap-1 text-ink-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-400" />
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-400 [animation-delay:120ms]" />
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink-400 [animation-delay:240ms]" />
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                )}
                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                    {error}
                  </div>
                )}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="border-t border-ink-100 p-3"
              >
                <div className="flex items-end gap-2 rounded-xl border border-ink-200 bg-white p-2 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        send(input);
                      }
                    }}
                    rows={1}
                    placeholder={a.inputPlaceholder}
                    className="max-h-32 flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none"
                    disabled={streaming}
                  />
                  <button
                    type="submit"
                    disabled={streaming || !input.trim()}
                    aria-label={a.send}
                    className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-brand-500 text-white shadow-soft transition hover:bg-brand-600 disabled:opacity-40"
                  >
                    <SendIcon />
                  </button>
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-ink-400">
                  {a.disclaimer}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
