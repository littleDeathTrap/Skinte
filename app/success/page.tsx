"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function Content() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">🎉 Thank you for your order!</h1>
      <p className="mb-6 text-lg">
        Your order <strong>#{orderId}</strong> has been paid successfully.
      </p>
      <Link href="/" className="text-blue-600 underline">
        ← Back to Home
      </Link>
    </>
  );
}

export default function SuccessPage() {
  return (
    <div className="p-10 max-w-xl mx-auto text-center">
      <Suspense fallback={<p>Loading...</p>}>
        <Content />
      </Suspense>
    </div>
  );
}
