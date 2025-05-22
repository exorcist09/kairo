import React, { useState, useCallback } from "react";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import EditorSidebar from "./EditorSideBar";
import EmailNode from "./nodes/EmailNode";
import PaymentNode from "./nodes/PaymentNode";
import DelayNode from "./nodes/DelayNode";
import TriggerNode from "./nodes/TriggerNode";
import FileUploadNode from "./nodes/FileUploadNode";
import GoogleDriveNode from "./nodes/GoogleDriveNode";
import ConditionNode from "./nodes/LogicNode";

const nodeTypes = {
  emailNode: EmailNode,
  paymentNode: PaymentNode,
  delayNode: DelayNode,
  triggerNode: TriggerNode,
  fileUploadNode: FileUploadNode,
  driveNode: GoogleDriveNode,
  logicNode: ConditionNode,
};

const fitViewOptions = { padding: 1 };

const FlowEditor = ({ nodes, setNodes, edges, setEdges }) => {
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // Function to add new node from sidebar button
  const addNode = (type) => {
    const id = (nodes.length + 1).toString();

    const initialDataMap = {
      emailNode: { email: "" },
      paymentNode: { amount: "", currency: "INR" },
      delayNode: { duration: 0 },
      triggerNode: { condition: "" },
      fileUploadNode: { file: null, fileName: "" },
    };

    const newNode = {
      id,
      type: type,
      position: { x: 250, y: 150 + nodes.length * 80 },
      data: initialDataMap[type] || {},
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <main className="flex-1 h-full w-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitViewOptions={fitViewOptions}
        fitView
        className="h-full w-full"
        nodeTypes={nodeTypes}
      >
        <Controls position="top-left" />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>

      {/* Pass addNode to sidebar */}
      <EditorSidebar addNode={addNode} />
    </main>
  );
};

export default FlowEditor;
