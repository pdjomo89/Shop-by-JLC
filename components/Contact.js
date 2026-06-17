"use client";

import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M5 5h14v10H9l-4 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Contact() {
  const { t, lang } = useT();
  const c = t.contact;

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@shopbyjlc.com";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "error"
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, body: message, company, locale: lang }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("ok");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (!c) return null;

  return (
    <section id="contact" className="border-t border-ink-100 bg-gradient-to-br from-brand-50 via-brand-100/60 to-accent-50 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">{c.title}</h2>
          <p className="mt-4 text-lg text-ink-500">{c.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-ink-800">{c.detailsTitle}</h3>
              <p className="mt-2 text-sm text-ink-500">{c.detailsSubtitle}</p>

              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-lg bg-brand-50 text-brand-600">
                    <MailIcon />
                  </span>
                  <div>
                    <div className="font-semibold text-ink-800">{c.emailHeading}</div>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-brand-600 hover:text-brand-700"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-lg bg-accent-50 text-accent-600">
                    <ChatIcon />
                  </span>
                  <div>
                    <div className="font-semibold text-ink-800">{c.responseHeading}</div>
                    <div className="text-ink-500">{c.responseBody}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-lg bg-ink-100 text-ink-700">
                    <ClockIcon />
                  </span>
                  <div>
                    <div className="font-semibold text-ink-800">{c.hoursHeading}</div>
                    <div className="text-ink-500">{c.hoursBody}</div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-ink-700">{c.nameLabel}</span>
                <input
                  type="text"
                  required
                  minLength={2}
                  maxLength={120}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink-700">{c.emailLabel}</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-medium text-ink-700">{c.subjectLabel}</span>
              <input
                type="text"
                maxLength={200}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={c.subjectPlaceholder}
                className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-medium text-ink-700">{c.messageLabel}</span>
              <textarea
                required
                minLength={5}
                maxLength={5000}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={c.messagePlaceholder}
                className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </label>

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            {status === "ok" && (
              <p className="mt-4 rounded-lg border border-accent-200 bg-accent-50 px-3 py-2 text-sm text-accent-700">
                {c.success}
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error || c.error}
              </p>
            )}

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs text-ink-400">{c.privacyNote}</p>
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 disabled:opacity-60"
              >
                {submitting ? c.sending : c.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
