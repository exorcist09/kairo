import { Handle, Position } from "@xyflow/react";
import { X } from "lucide-react";
import React, { useState } from "react";

const TriggerNode = ({ data, onChange }) => {
  const [triggerType, setTriggerType] = useState(data?.triggerType || "time");
  const [time, setTime] = useState(data?.time || "");

  const [isVisible, setIsVisible] = useState(true);
  const handleDelete = () => {
    setIsVisible(false); // Hides the node visually
  };

  if (!isVisible) return null;

  const handleTypeChange = (e) => {
    setTriggerType(e.target.value);
    if (onChange) onChange({ ...data, triggerType: e.target.value, time });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    if (onChange) onChange({ ...data, triggerType, time: e.target.value });
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
      <h3 className="text-center text-lg font-semibold mb-4">Trigger Node</h3>

      <select
        value={triggerType}
        onChange={handleTypeChange}
        className="w-full p-2 rounded-md text-black mb-3 focus:outline-none"
      >
        <option value="time">Scheduled Time</option>
        <option value="event">Event</option>
      </select>

      {triggerType === "time" && (
        <input
          type="datetime-local"
          value={time}
          onChange={handleTimeChange}
          className="w-full p-2 rounded-md text-black focus:outline-none"
        />
      )}

      {triggerType === "event" && (
        <input
          type="text"
          placeholder="Event name"
          value={time}
          onChange={handleTimeChange}
          className="w-full p-2 rounded-md text-black focus:outline-none"
        />
      )}
    </div>
  );
};

export default TriggerNode;
