import React, { useEffect, useState } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import Topbar from "./Topbar";
import LogoHolder from "./LogoHolder";
import FlowEditor from "./FlowEditor";
import EditorSidebar from "./EditorSideBar";
import { saveWorkflow, getWorkflow } from "@/api/workflow";

import { useParams } from "react-router-dom";

const Editor = () => {
  const { id: workLabelId } = useParams();
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const fetchWorkflow = async () => {
      try {
        const data = await getWorkflow(workLabelId);
        setNodes(Array.isArray(data.nodes) ? data.nodes : []);
        setEdges(Array.isArray(data.edges) ? data.edges : []);
      } catch (error) {
        console.log("Error loading Workflow:", error);
      }
    };
    fetchWorkflow();
  }, [workLabelId]);

  const handleSave = async () => {
    try {
      console.log("Saving Workflow:", { nodes, edges });
      const response = await saveWorkflow(workLabelId, { nodes, edges });
      console.log("Save response: ", response);
      alert("Workflow Saved");
    } catch (error) {
      console.error("Error saving:", error);
    }
  };

  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <Topbar title="1" handleSave={handleSave} />
        <div className="flex-1 flex overflow-hidden mt-16">
          <EditorSidebar />

          <div className="w-full">
            <FlowEditor
              nodes={nodes}
              setNodes={setNodes}
              edges={edges}
              setEdges={setEdges}
            />
          </div>
        </div>
        <LogoHolder />
      </div>
    </ReactFlowProvider>
  );
};

export default Editor;
