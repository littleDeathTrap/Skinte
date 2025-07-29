import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import { OrderSuccessTemplate } from "@/shared/components/shared/email-temapltes/order-success";
import { sendEmail } from "@/shared/lib";
import { OrderStatus } from "@prisma/client";
import { CartItemDTO } from "@/shared/services/dto/cart.dto";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as Stripe.LatestApiVersion,
});
export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  const secret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const orderId = session.metadata?.order_id;

    if (!orderId) {
      return NextResponse.json(
        { error: "Missing order_id in metadata" },
        { status: 400 }
      );
    }

    const order = await prisma.order.findUnique({
      where: { id: Number(orderId) },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    await prisma.order.update({
      where: { id: order.id },
      data: { status: OrderStatus.SUCCEEDED },
    });

    const items = JSON.parse(order.items as string) as CartItemDTO[];

    await sendEmail(
      order.email,
      "Skinte / Your order has been successfully placed 🎉",
      OrderSuccessTemplate({ orderId: order.id, items })
    );
  }

  return NextResponse.json({ received: true });
}
