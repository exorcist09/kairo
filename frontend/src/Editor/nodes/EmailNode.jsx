import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { X } from "lucide-react";

const EmailNode = ({ data, onChange }) => {
  const [email, setEmail] = useState(data?.email || "");
  const [message, setMessage] = useState(data?.message || "");
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (field, value) => {
    if (field === "email") setEmail(value);
    if (field === "message") setMessage(value);
    if (onChange) onChange({ ...data, email, message, [field]: value });
  };

  const handleDelete = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-md w-64 text-white font-sans shadow-lg relative">
      <button
        onClick={handleDelete}
        className="absolute top-1 right-1 border rounded-full flex items-center justify-center p-1 m-2 bg-gray-600 border-gray-600 text-white hover:text-red-400"
        title="Delete Node"
      >
        <X size={18} />
      </button>

      <Handle type="target" id="top" position={Position.Top} className="w-2 h-2 bg-white rounded-full" />
      <Handle type="target" id="right" position={Position.Right} className="w-2 h-2 bg-white rounded-full" />
      <Handle type="source" id="bottom" position={Position.Bottom} className="w-2 h-2 bg-white rounded-full" />
      <Handle type="source" id="left" position={Position.Left} className="w-2 h-2 bg-white rounded-full" />

      <h3 className="text-center text-lg font-semibold mb-4">Email Node</h3>

      <div className="mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Recipient Email"
          className="w-full p-2 rounded-md text-black focus:outline-none"
          required
        />
        <small className="text-gray-400 mt-1 block">Enter recipient email.</small>
      </div>

      <div>
        <textarea
          value={message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Your message"
          rows={4}
          className="w-full p-2 rounded-md text-black focus:outline-none resize-none"
        />
        <small className="text-gray-400 mt-1 block">Enter message to send.</small>
      </div>
    </div>
  );
};

export default EmailNode;
