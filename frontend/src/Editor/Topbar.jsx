import { Button } from "@/components/ui/button";
import { ArrowDownToLine, ArrowLeftFromLine, PlaneTakeoff } from "lucide-react";
import React from "react";
import { Link, redirect } from "react-router-dom";

const Topbar = ({ id, title, handleSave, handleExecute }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-12 bg-white z-10 flex items-center justify-between gap-4 px-6 py-8 border-b-4 border-gray-200">
      <div className=" gap-2 text-sm font-bold text-gray-800 hover:underline ml-2">
        <Link to="/workspace" className="flex items-center gap-2">
          <ArrowLeftFromLine size={18} />
          Back To Workspace
        </Link>
      </div>

      <div>
        <Button
          className="border-2 border-dashed border-yellow-500 hover:bg-yellow-500 text-black bg-yellow-300/40 px-4 py-2 mr-2 "
          onClick={handleSave}
        >
          <ArrowDownToLine size={18} className="mr-1" />
          Save
        </Button>
        <Button
          className="border-2 border-dashed border-yellow-500 hover:bg-yellow-500 text-black bg-yellow-300/40 px-4 py-2 mr-2"
          onClick={handleExecute}
        >
          <PlaneTakeoff size={18} className="mr-1" />
          Execute
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
