"use client";

import { useEffect, useRef, useState } from "react";
import { useT } from "@/components/LanguageProvider";

const POLL_INTERVAL = 3000;
const POLL_MAX = 60;

export default function CheckoutModal({ planId, planLabel, planPrice, onClose }) {
  const { t, lang } = useT();
  const open = !!planId;

  const [method, setMethod] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [operator, setOperator] = useState("MTN");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [campayStatus, setCampayStatus] = useState(null);
  const [campayRef, setCampayRef] = useState(null);
  const pollRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setMethod(null);
      setEmail("");
      setPhone("");
      setOperator("MTN");
      setSubmitting(false);
      setError(null);
      setCampayStatus(null);
      setCampayRef(null);
      if (pollRef.current) clearTimeout(pollRef.current);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    return () => {
      if (pollRef.current) clearTimeout(pollRef.current);
    };
  }, []);

  if (!open) return null;

  const handleStripe = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, email, locale: lang }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  const handleCampay = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setCampayStatus("PENDING");
    try {
      const res = await fetch("/api/checkout/campay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, phone, operator, email }),
      });
      const data = await res.json();
      if (!res.ok || !data.reference) throw new Error(data.error || "Payment failed");
      setCampayRef(data.reference);
      pollCampay(data.reference, 0);
    } catch (err) {
      setError(err.message);
      setCampayStatus(null);
      setSubmitting(false);
    }
  };

  const pollCampay = (reference, attempt) => {
    if (attempt >= POLL_MAX) {
      setError(t.checkout.errors.timeout);
      setCampayStatus("TIMEOUT");
      return;
    }
    pollRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/checkout/campay/${reference}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Status check failed");
        const status = String(data.status || "").toUpperCase();
        setCampayStatus(status);
        if (status === "SUCCESSFUL") {
          setSubmitting(false);
          return;
        }
        if (status === "FAILED" || status === "CANCELLED") {
          setError(t.checkout.errors.declined);
          setSubmitting(false);
          return;
        }
        pollCampay(reference, attempt + 1);
      } catch (err) {
        setError(err.message);
        setSubmitting(false);
      }
    }, POLL_INTERVAL);
  };

  const onBackdrop = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <div
      ref={dialogRef}
      onMouseDown={onBackdrop}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-800/60 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-soft sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label={t.checkout.close}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-ink-400 transition hover:bg-ink-50 hover:text-ink-700"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M4.7 4.7a1 1 0 011.4 0L10 8.6l3.9-3.9a1 1 0 111.4 1.4L11.4 10l3.9 3.9a1 1 0 11-1.4 1.4L10 11.4l-3.9 3.9a1 1 0 01-1.4-1.4L8.6 10 4.7 6.1a1 1 0 010-1.4z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <h2 id="checkout-title" className="text-xl font-bold text-ink-800">
          {t.checkout.title}
        </h2>
        <p className="mt-1 text-sm text-ink-500">
          {planLabel} — <span className="font-semibold text-ink-800">{planPrice}</span>{" "}
          {t.pricing.perMonth}
        </p>

        {!method && (
          <div className="mt-6 space-y-3">
            <p className="text-sm font-medium text-ink-700">{t.checkout.choosePaymentMethod}</p>
            <button
              type="button"
              onClick={() => setMethod("stripe")}
              className="w-full rounded-xl border border-ink-200 p-4 text-left transition hover:border-brand-500 hover:bg-brand-50"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink-800">{t.checkout.payWithCard}</span>
                <span className="text-xs font-medium text-ink-500">{t.checkout.cardSubtitle}</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => {
                setMethod("campay");
                setOperator("MTN");
              }}
              className="w-full rounded-xl border border-ink-200 p-4 text-left transition hover:border-accent-500 hover:bg-accent-50"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink-800">{t.checkout.payWithMobile}</span>
                <span className="text-xs font-medium text-ink-500">MTN MoMo · Orange Money</span>
              </div>
            </button>
          </div>
        )}

        {method === "stripe" && (
          <form onSubmit={handleStripe} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-ink-700">{t.checkout.emailLabel}</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMethod(null)}
                className="flex-1 rounded-lg border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-700 transition hover:bg-ink-50"
              >
                {t.checkout.back}
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600 disabled:opacity-60"
              >
                {submitting ? t.checkout.redirecting : t.checkout.continueToPayment}
              </button>
            </div>
            <p className="text-xs text-ink-400">{t.checkout.stripeFooter}</p>
          </form>
        )}

        {method === "campay" && !campayStatus && (
          <form onSubmit={handleCampay} className="mt-6 space-y-4">
            <div>
              <span className="text-sm font-medium text-ink-700">{t.checkout.operatorLabel}</span>
              <div className="mt-1 grid grid-cols-2 gap-2">
                {["MTN", "OM"].map((op) => (
                  <button
                    type="button"
                    key={op}
                    onClick={() => setOperator(op)}
                    className={[
                      "rounded-lg border px-3 py-2 text-sm font-semibold transition",
                      operator === op
                        ? "border-accent-500 bg-accent-50 text-accent-700"
                        : "border-ink-200 text-ink-700 hover:border-ink-300",
                    ].join(" ")}
                  >
                    {op === "MTN" ? "MTN MoMo" : "Orange Money"}
                  </button>
                ))}
              </div>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-ink-700">{t.checkout.phoneLabel}</span>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="237 6XX XXX XXX"
                className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink-700">{t.checkout.emailLabelOptional}</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-ink-200 px-3 py-2 text-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-200"
              />
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMethod(null)}
                className="flex-1 rounded-lg border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-700 transition hover:bg-ink-50"
              >
                {t.checkout.back}
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-600 disabled:opacity-60"
              >
                {submitting ? t.checkout.processing : t.checkout.payNow}
              </button>
            </div>
            {t.pricing.trialNoteMobile && (
              <p className="text-xs font-medium text-ink-500">{t.pricing.trialNoteMobile}</p>
            )}
            <p className="text-xs text-ink-400">{t.checkout.campayFooter}</p>
          </form>
        )}

        {method === "campay" && campayStatus && (
          <div className="mt-6 space-y-4 text-center">
            {campayStatus === "SUCCESSFUL" ? (
              <>
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent-100 text-accent-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 011.4-1.4L8.5 12l6.8-6.8a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base font-semibold text-ink-800">{t.checkout.success}</p>
                <p className="text-sm text-ink-500">{t.checkout.successDetails}</p>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600"
                >
                  {t.checkout.done}
                </button>
              </>
            ) : campayStatus === "FAILED" || campayStatus === "CANCELLED" || campayStatus === "TIMEOUT" ? (
              <>
                <p className="text-base font-semibold text-red-600">{error || t.checkout.errors.declined}</p>
                <button
                  type="button"
                  onClick={() => {
                    setCampayStatus(null);
                    setCampayRef(null);
                    setError(null);
                    setSubmitting(false);
                  }}
                  className="rounded-lg border border-ink-200 px-5 py-2 text-sm font-semibold text-ink-700 transition hover:bg-ink-50"
                >
                  {t.checkout.tryAgain}
                </button>
              </>
            ) : (
              <>
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-accent-200 border-t-accent-500" />
                <p className="text-base font-semibold text-ink-800">{t.checkout.checkPhone}</p>
                <p className="text-sm text-ink-500">{t.checkout.checkPhoneHint}</p>
                {campayRef && (
                  <p className="text-xs text-ink-400">
                    {t.checkout.referenceLabel}: <span className="font-mono">{campayRef}</span>
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
