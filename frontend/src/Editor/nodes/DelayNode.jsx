import { Handle,Position } from "@xyflow/react";
import { X } from "lucide-react";
import React, { useState } from "react";

const DelayNode = ({ data, onChange }) => {
  const [delayTime, setDelayTime] = useState(data?.delayInMinutes || 0);
    const [isVisible, setIsVisible] = useState(true);
  

  const handleChange = (e) => {
    const value = e.target.value;
    setDelayTime(value);
    if (onChange) {
      onChange({ ...data, delayInMinutes: Number(value) });
    }
  };

    const handleDelete = () => {
    setIsVisible(false); // Hides the node visually
  };

  if (!isVisible) return null;


  return (
    <div className="bg-[#1e1e1e] p-6 rounded-md w-48 text-white font-sans shadow-lg">
      <button
        onClick={handleDelete}
        className="absolute top-1 right-1 border rounded-full flex items-center justify-center p-1 m-2 bg-gray-600 border-gray-600 text-white hover:text-red-400"
        title="Delete Node"
      >
        <X size={18} />
      </button>

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
      <h3 className="text-center text-lg font-semibold mb-4">Delay Node</h3>
      <div className="flex flex-col items-center">
        <label htmlFor="delayTime" className="mb-2 text-sm text-gray-300">
          Delay Time (minutes)
        </label>
        <input
          id="delayTime"
          type="number"
          min={0}
          value={delayTime}
          onChange={handleChange}
          className="w-full text-black p-2 rounded-md focus:outline-none"
          placeholder="Enter delay in minutes"
        />
      </div>

    </div>
  );
};

export default DelayNode;
