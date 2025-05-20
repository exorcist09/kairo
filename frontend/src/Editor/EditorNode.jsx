// App.jsx
import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Handle,
  Position
} from 'react-flow-renderer';

// Custom node component styled with Tailwind
const CustomNode = ({ data }) => {
  return (
    <div className="bg-blue-600 text-white p-4 rounded shadow-lg w-48">
      <Handle type="target" position={Position.Top} className="bg-white" />
      <div className="font-bold text-lg mb-2">{data.label}</div>
      <div className="text-sm">{data.description}</div>
      <Handle type="source" position={Position.Bottom} className="bg-white" />
    </div>
  );
};

const nodeTypes = {
  customNode: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: { label: 'Custom Node', description: 'This node is styled with TailwindCSS' },
    position: { x: 250, y: 100 },
  },
  {
    id: '2',
    type: 'customNode',
    data: { label: 'Another Node', description: 'Another Tailwind styled node' },
    position: { x: 250, y: 250 },
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

function App() {
  const onNodesChange = useCallback(() => {}, []);
  const onEdgesChange = useCallback(() => {}, []);
  const onConnect = useCallback(() => {}, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default App;
