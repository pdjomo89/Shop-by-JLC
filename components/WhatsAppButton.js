"use client";

import { useEffect, useRef, useState } from "react";

const PHONE = "4917177743665";
const AGENT_NAME = "Shop by JLC Team";
const WELCOME = "Hi there! How can we help you today?";
const PREFILL = "Hi! I have a question about Shop by JLC.";

function WhatsAppIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.11 17.27c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01a1.1 1.1 0 0 0-.8.38c-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.02 4.7C9.78 4.7 4.7 9.77 4.7 16c0 2 .53 3.95 1.53 5.67L4.6 27.4l5.86-1.53A11.27 11.27 0 0 0 16.02 27.3c6.24 0 11.32-5.07 11.32-11.3 0-3.02-1.18-5.86-3.31-7.99A11.24 11.24 0 0 0 16.02 4.7zm0 20.62c-1.77 0-3.5-.48-5.02-1.38l-.36-.21-3.48.91.93-3.39-.23-.35a9.32 9.32 0 0 1-1.43-4.99c0-5.16 4.21-9.36 9.39-9.36 2.5 0 4.86.97 6.63 2.74a9.3 9.3 0 0 1 2.74 6.62c0 5.17-4.2 9.41-9.37 9.41z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message.trim() || PREFILL)}`;

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="WhatsApp chat"
          className="w-80 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-ink-200"
        >
          <div className="flex items-center gap-3 bg-[#128C7E] px-4 py-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
              <WhatsAppIcon className="h-6 w-6" />
            </div>
            <div className="flex-1 leading-tight">
              <div className="text-sm font-semibold">{AGENT_NAME}</div>
              <div className="text-xs text-white/80">Typically replies within minutes</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-white/80 transition hover:bg-white/15 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="bg-[#ECE5DD] px-4 py-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
              <div className="text-xs font-medium text-[#128C7E]">{AGENT_NAME}</div>
              <p className="mt-0.5 text-sm text-ink-800">{WELCOME}</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(href, "_blank", "noopener,noreferrer");
              setOpen(false);
              setMessage("");
            }}
            className="flex flex-col gap-3 border-t border-ink-100 bg-white px-4 py-3"
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message…"
              rows={2}
              className="w-full resize-none rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-800 placeholder:text-ink-400 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1ebe57] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Start chat on WhatsApp
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe57] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <WhatsAppIcon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}
