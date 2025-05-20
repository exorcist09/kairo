import React, { useState, useEffect } from "react";
import { Pen, Spline } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlowForm from "@/Components/FlowForm";
import WorkflowLabel from "@/WorkFlow/WorkflowLabel";
// zustand
import useWorkflowStore from "@/store/workflowspace";
import { createWorkLabel, getAllWorkLabels } from "@/api/worklabel";
import WorkflowLabelsList from "@/WorkFlow/WorkflowLabelList";

const WorkSpace = () => {

  const { workflows, addWorkflow, setWorkflows } = useWorkflowStore();
  const [showFlowForm, setShowFlowForm] = useState(false);

  useEffect(() => {
    const fetchWorkflows = async () => {
      try {
        const res = await getAllWorkLabels();
        setWorkflows(res.data);
      } catch (error) {
        console.log("Failed to fetch worklables", error);
      }
    };
    fetchWorkflows();
  }, []);

  const handleAddWorkflow = async (workflow) => {
    try {
      const res = await createWorkLabel(workflow);
      addWorkflow(res.data);
      setShowFlowForm(false);
    } catch (error) {
      console.error("Failed to create workflow", error);
    }
  };

  const handleCreateClick = () => {
    setShowFlowForm(true);
  };

  const handleCloseFlowForm = () => {
    setShowFlowForm(false);
  };

  useEffect(() => {
    // Prevent scrolling when form is open
    document.body.classList.toggle("overflow-hidden", showFlowForm);
  }, [showFlowForm]);

  return (
    <div className="h-screen flex flex-col relative px-4">
      {/* Header */}
      <div className="sticky top-0 bg-gray-50 z-10 px-2 py-4 pt-4 flex justify-between items-center border-b border-gray-300">
        <h1 className="font-bold text-3xl text-gray-800">Workspace</h1>
        <Button
          className="bg-blue-600 px-6 py-3 text-md hover:bg-blue-800 flex items-center gap-2"
          onClick={handleCreateClick}
        >
          <Pen size={18} />
          Create Workflow
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-grow px-8 pb-8">
        {!showFlowForm && workflows.length === 0 && (
          <div className="flex flex-col items-center h-full mt-12 space-y-6">
            <div className="bg-gray-500/40 rounded-full p-10">
              <Spline size={62} />
            </div>
            <label className="text-gray-600 text-lg text-center">
              No workflows created till now
            </label>
            <Button
              className="bg-blue-600 p-6 text-md hover:bg-blue-800"
              onClick={handleCreateClick}
            >
              <Pen />
              Create a Workflow
            </Button>
          </div>
        )}

        {!showFlowForm && workflows.length > 0 && (
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-4xl space-y-4">
              <WorkflowLabelsList/>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showFlowForm && (
        <div className="absolute inset-0 flex justify-center items-center z-50 bg-white bg-opacity-80">
          <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-2xl max-h-[90vh] overflow-auto">
            <FlowForm
              onClose={handleCloseFlowForm}
              onCreate={handleAddWorkflow}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkSpace;
