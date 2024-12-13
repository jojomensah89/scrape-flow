"use client"
import { useCallback, useEffect } from "react";

import { Workflow } from "@prisma/client";
import {
  Background,
  BackgroundVariant,
  ColorMode,
  Connection,
  Controls,
  type Edge,
  type Node,
  ReactFlow,
  addEdge,
  getOutgoers,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useTheme } from "next-themes";
import { AppNode } from "@/types/appNode";
import { CreateFlowNode } from "@/lib/workflow/CreateFlowNode";
import { TaskType } from "@/types/task";
import NodeComponent from "./nodes/NodeComponent";


const nodeTypes = {
  FlowScrapeNode: NodeComponent,
};


const snapGrid: [number, number] = [50, 50];
const fitViewOptions = { padding: 1 };
function FlowEditor() {
  //       const { theme } = useTheme();
  //   const colorMode = theme === undefined ? 'light' : (theme as ColorMode);

  const initialNodes = [CreateFlowNode(TaskType.LAUNCH_BROWSER)];
  const initialEdges: Edge[] = [];
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);
  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        snapToGrid
        snapGrid={snapGrid}
        fitView
        fitViewOptions={fitViewOptions}
      >
        <Controls position="top-left" />
        <Background variant={BackgroundVariant.Dots} gap={12} />
      </ReactFlow>
    </main>
  );
}

export default FlowEditor;
