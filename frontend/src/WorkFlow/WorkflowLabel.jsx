import { File, ShuffleIcon, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const WorkflowLabel = ({ id, title, description, editLink }) => {
  return (
    <div className="bg-white border border-dashed border-gray-400 rounded-lg shadow-md p-6 w-full">
      <div className="flex items-start gap-3">
        <File size={22} className="text-blue-600 mt-1" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            {/* title */}
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          {/* description */}
          <p className="mt-2 ml-1 text-gray-600 text-sm">{description}</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            {editLink && (
              <Link
                to={editLink}
                className="flex items-center justify-center gap-2 px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100 border border-blue-200 transition text-md font-bold"
              >
                <ShuffleIcon />
                <span className="text-lg">Edit</span>
              </Link>
            )}
          </div>
          <div className="">
            <button className="bg-gray-400/40 border-2 border-dashed border-red-600 border-rounded p-4 rounded-full text-red-800">
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowLabel;
