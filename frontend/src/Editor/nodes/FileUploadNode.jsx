import { Handle,Position } from "@xyflow/react";
import { X } from "lucide-react";
import React, { useState } from "react";

const FileUploadNode = ({ data, onChange }) => {
  const [fileName, setFileName] = useState(data?.fileName || "");
  const [isVisible, setIsVisible] = useState(true);
  const handleDelete = () => {
    setIsVisible(false); // Hides the node visually
  };

  if (!isVisible) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      if (onChange) {
        onChange({ ...data, file, fileName: file.name });
      }
    }
  };

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-md w-64 text-white font-sans shadow-lg flex flex-col items-center">
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
      <h3 className="text-center text-lg font-semibold mb-4">
        File Upload Node
      </h3>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 w-full text-white"
      />

      {fileName && (
        <p className="text-gray-400 text-sm text-center">
          Selected: {fileName}
        </p>
      )}

      <small className="text-gray-400 mt-2 text-center">
        Upload a file to use in this node.
      </small>

    </div>
  );
};

export default FileUploadNode;
