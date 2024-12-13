"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";

import prisma from "@/lib/prisma";

export async function DeleteWorkflow(id: string) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("Unauthenticated");
  }

  await prisma.workflow.delete({
    where: { id, userId },
  });

  revalidatePath("/workflows");
}
