import Link from "next/link";

export const metadata = {
  title: "Checkout cancelled",
  robots: { index: false, follow: false },
};

export default function CheckoutCancelledPage() {
  return (
    <main className="min-h-screen bg-white text-ink-800">
      <div className="container-page flex min-h-screen items-center justify-center py-20">
        <div className="mx-auto max-w-lg rounded-2xl border border-ink-100 bg-white p-10 text-center shadow-soft">
          <h1 className="text-3xl font-bold tracking-tight">Checkout cancelled</h1>
          <p className="mt-3 text-ink-500">
            No charge was made. You can try again whenever you're ready.
          </p>
          <Link
            href="/#pricing"
            className="mt-8 inline-block rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-600"
          >
            Back to pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
