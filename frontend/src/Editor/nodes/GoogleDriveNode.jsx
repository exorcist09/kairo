import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { X } from "lucide-react";

const GoogleDriveNode = ({ data, onChange }) => {
  const [file, setFile] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false); // Hides the node visually
  };

  if (!isVisible) return null;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (onChange) {
      onChange({ ...data, file: selectedFile });
    }
  };

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-md w-56 text-white font-sans shadow-lg flex flex-col items-center relative">
      <button
        onClick={handleDelete}
        className="absolute top-1 right-1 border rounded-full flex items-center justify-center p-1 m-2 bg-gray-600 border-gray-600 text-white hover:text-red-400"
        title="Delete Node"
      >
        <X size={18} />
      </button>

      {/* React Flow Handles */}
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

      <h3 className="text-center text-lg font-semibold mb-4">Drive Node</h3>

      <input
        type="file"
        onChange={handleFileChange}
        className="w-full p-1 bg-white text-black rounded-md text-sm cursor-pointer"
      />

      {file && (
        <p className="text-xs text-gray-400 mt-2 text-center">
          File: <span className="text-white">{file.name}</span>
        </p>
      )}
      <p className="text-sm text-gray-100/40">Select the file you want to upload to drive</p>
    </div>
  );
};

export default GoogleDriveNode;
