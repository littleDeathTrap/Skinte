import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const stories = await prisma.story.findMany({
    include: {
      items: true,
    },
  });
  console.log(stories);
  return NextResponse.json(stories);
}
