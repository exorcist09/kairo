import React from "react";
import { ReactFlowProvider } from "@xyflow/react";
import Topbar from "./Topbar";
import LogoHolder from "./LogoHolder";
import FlowEditor from "./FlowEditor";
import EditorSidebar from "./EditorSideBar";

const Editor = () => {
  // const { id } = useParams();
  // const workflowTitle = "Title" + id;
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <Topbar title="1" />
        <div className="flex-1 flex overflow-hidden mt-16">
          <EditorSidebar />

          <div className="w-full">
            <FlowEditor />
          </div>
        </div>
        <LogoHolder />
      </div>
    </ReactFlowProvider>
  );
};

export default Editor;
