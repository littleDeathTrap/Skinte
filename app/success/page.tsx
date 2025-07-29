"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  return (
    <div className="p-10 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 Thank you for your order!</h1>
      <p className="mb-6 text-lg">
        Your order <strong>#{orderId}</strong> has been paid successfully.
      </p>
      <Link href="/" className="text-blue-600 underline">
        ← Back to Home
      </Link>
    </div>
  );
}
