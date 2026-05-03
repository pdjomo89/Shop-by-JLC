import Link from "next/link";

export const metadata = {
  title: "Payment successful",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-white text-ink-800">
      <div className="container-page flex min-h-screen items-center justify-center py-20">
        <div className="mx-auto max-w-lg rounded-2xl border border-ink-100 bg-white p-10 text-center shadow-soft">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-100 text-accent-600">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-7 w-7">
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">You're in.</h1>
          <p className="mt-3 text-ink-500">
            Your subscription is being activated. You'll receive a confirmation email shortly.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
