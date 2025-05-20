import HistoryLabel from "@/Components/HistoryLabel";
import WorkflowLabel from "@/WorkFlow/WorkflowLabel";
import React from "react";

const History = () => {
  return (
    <div className="h-screen   flex flex-col relative px-4">
      <div className="sticky top-0 bg-gray-50 z-10 px-2 py-4 pt-4 flex justify-between items-center border-b border-gray-300">
        <h1 className="font-bold text-3xl text-gray-800"> History</h1>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-4xl space-y-4">
          {[1, 2, 3, 4].map(() => {
            return <HistoryLabel  title={"Already Completed"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
