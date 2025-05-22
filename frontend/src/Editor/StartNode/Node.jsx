import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import NodeHeader from "./NodeHeader";
import NodeComponent from "./NodeComponent";
import NodeBottom from "./NodeBottom";
import { Separator } from "@radix-ui/react-separator";

const Node = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleDeleteNode = (e) => {
    setIsVisible(false);
  };
  if (!isVisible) return null;

  return (
    <div className="bg-[#1e1e1e] text-white p-4 shadow-lg w-auto relative rounded-lg">
      <NodeHeader  onDelete={handleDeleteNode} />
      <Separator size={4} />
      {/*  Receiving inputs (targets) */}
      <Handle
        type="target"
        id="top"
        position={Position.Top}
        className="w-2 h-2 bg-white rounded-full"
      />
      <Handle
        type="target"
        id="right"
        position={Position.Right}
        className="w-2 h-2 bg-white rounded-full"
      />
      <NodeComponent />

      {/* Sending outputs (sources) */}
      <Handle
        type="source"
        id="bottom"
        position={Position.Bottom}
        className="w-2 h-2 bg-white rounded-full"
      />
      <Handle
        type="source"
        id="left"
        position={Position.Left}
        className="w-2 h-2 bg-white rounded-full"
      />
      <NodeBottom />
    </div>
  );
};

export default Node;
