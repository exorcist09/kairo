import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
} from "@xyflow/react";
import React from "react";

import "@xyflow/react/dist/style.css";
import Node from "./EditorNode/Node";

const fitViewOptions = { padding: 1 };

const FlowEditor = () => {
  return (
    <main className="flex-1 h-full w-full relative">
      <ReactFlow
        fitViewOptions={fitViewOptions}
        fitView
        className="h-full w-full"
      >
        <Controls position="top-left" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        <Node />
      </ReactFlow>
    </main>
  );
};

export default FlowEditor;
