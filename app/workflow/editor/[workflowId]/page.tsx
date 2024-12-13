import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import Editor from "../../_components/Editor";

async function WorkflowPage(props: {
  params: Promise<{ workflowId: string }>;
}) {
  const params = await props.params;
  const { workflowId } = params;

  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return <div>unauthenticated</div>;
  }

  const workflow = await prisma.workflow.findUnique({
    where: { id: workflowId, userId },
  });

  if (!workflow) {
    return <div>Workflow not found</div>;
  }

  return <Editor workflow={workflow} />;
}

export default WorkflowPage;
