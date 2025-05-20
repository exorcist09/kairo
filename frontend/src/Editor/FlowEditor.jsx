import React, { useState, useCallback } from "react";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react"; // or "react-flow-renderer" depending on your install

import "@xyflow/react/dist/style.css";
import Node from "./EditorNode/Node";
import EditorSidebar from "./EditorSideBar";

const fitViewOptions = { padding: 1 };

const initialNodes = [
  // can start empty or with some initial nodes
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: { stroke: "red" },
  },
];

const FlowEditor = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  // Function to add new node from sidebar button
  const addNode = () => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      type: "customNode", // or your node type
      position: { x: 250, y: 150 + nodes.length * 80 },
      data: { label: `New Node ${id}`, description: "Created from sidebar" },
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
        nodeTypes={{ customNode: Node }}
      >
        <Controls position="top-left" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>

      {/* Pass addNode to sidebar */}
      <EditorSidebar addNode={addNode} />
    </main>
  );
};

export default FlowEditor;
