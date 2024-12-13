"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";

import prisma from "@/lib/prisma";
import { WorkflowStatus } from "@/types/workflow";

export async function UpdateWorkflow({
  id,
  definition,
}: {
  id: string;
  definition: string;
}) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("Unauthenticated");
  }
  const workflow = await prisma.workflow.findUnique({
    where: { id, userId },
  });
  if (!workflow) {
    throw new Error("Workflow not found");
  }

  if (workflow.status !== WorkflowStatus.DRAFT) {
    throw new Error("workflow is not a draft");
  }

  await prisma.workflow.update({
    where: { id, userId },
    data: {
      definition,
    },
  });

  revalidatePath("/workflows");
}
