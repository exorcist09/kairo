import { File, Trash2 } from "lucide-react";
import React from "react";

const HistoryLabel = ({ title, description }) => {
  return (
    <div className="bg-gray-200 border border-dashed border-gray-400 rounded-lg shadow-inner p-6 w-full opacity-70 grayscale pointer-events-none transition">
      <div className="flex items-start gap-3">
        <File size={22} className="text-gray-500 mt-1" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
          </div>
          <p className="mt-2 ml-1 text-gray-600 text-sm">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-gray-300 border-2 border-dashed border-gray-500 p-4 rounded-full text-gray-600 cursor-not-allowed"
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryLabel;
