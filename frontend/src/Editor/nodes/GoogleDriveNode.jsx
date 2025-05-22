import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { X } from "lucide-react";

const GoogleDriveNode = ({ data, onChange }) => {
  const [folderName, setFolderName] = useState(data?.folderName || "");
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false); // Hides the node visually
  };

  if (!isVisible) return null;

  const handleChange = (e) => {
    const value = e.target.value;
    setFolderName(value);
    if (onChange) {
      onChange({ ...data, folderName: value });
    }
  };

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-md w-56 text-white font-sans shadow-lg flex flex-col items-center">
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

      <h3 className="text-center text-lg font-semibold mb-4">Drive Node</h3>
      <input
        type="text"
        value={folderName}
        onChange={handleChange}
        placeholder="Folder Name"
        className="w-full p-2 rounded-md text-black focus:outline-none"
        required
      />
      <small className="text-gray-400 mt-3 text-center">
        If not specified, a new folder named <em>new</em> will be created.
      </small>

    </div>
  );
};

export default GoogleDriveNode;
