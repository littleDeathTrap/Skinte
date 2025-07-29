"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as Stripe.LatestApiVersion,
});

interface Props {
  description: string;
  orderId: number;
  amount: number;
}

export async function createPayment({ amount, orderId, description }: Props) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: description,
          },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      },
    ],
    metadata: {
      order_id: orderId.toString(),
    },
    success_url: `${process.env.DOMAIN_URL}/success?order_id=${orderId}`,
    cancel_url: `${process.env.DOMAIN_URL}/cancel`,
  });

  return {
    id: session.id,
    confirmation: {
      confirmation_url: session.url,
    },
  };
}
