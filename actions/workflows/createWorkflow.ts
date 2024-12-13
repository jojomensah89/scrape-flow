"use server";

import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import {
  createWorkflowSchema,
  CreateWorkflowSchemaType,
} from "@/schema/workflow";
import { WorkflowStatus } from "@/types/workflow";

export async function CreateWorkflow(form: CreateWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);

  if (!success) {
    throw new Error("Invalid form data");
  }

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("Unauthenticated");
  }

  const createdWorkflow = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: "TODO",
      ...data,
    },
  });

  if (!createdWorkflow) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflow/editor/${createdWorkflow.id}`);
}
