import React from "react";
import EditorSideBarButton from "./EditorSideBarButton";
import { HardDrive, Plus } from "lucide-react";
import { Clock, FileText } from "lucide-react";

const tools = [
  { icon: HardDrive, label: "Drive" },
  { icon: FileText, label: "Notion" },
  { icon: Clock, label: "Clock" },
];

const EditorSidebar = ({ addNode }) => {
  return (
    <aside className="w-72 h-full bg-white border-r-4 border-gray-300 fixed top-16 bottom-10 left-0 ">
      <div className="h-full overflow-y-auto px-4 py-6 space-y-4">
        <EditorSideBarButton icon={FileText} label="Notion" onClick={addNode} />
        <EditorSideBarButton icon={Clock} label="Clock" onClick={addNode} />
        <EditorSideBarButton
          icon={Plus}
          label="Custom Node"
          onClick={addNode}
        />

        {/* Example multiple tool buttons */}
        {[...Array(6)].map((_, idx) => (
          <EditorSideBarButton
            key={idx}
            icon={Plus}
            label={`Tool ${idx + 1}`}
            onClick={addNode}
          />
        ))}
      </div>
    </aside>
  );
};

export default EditorSidebar;
