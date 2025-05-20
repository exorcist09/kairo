import React from "react";
import EditorSideBarButton from "./EditorSideBarButton";
import { Plus, Save, Download } from "lucide-react";

const EditorSidebar = () => {
  return (
    <aside className="w-72 h-full bg-white border-r-4 border-gray-300 fixed top-16 bottom-10 left-0 ">
      <div className="h-full overflow-y-auto px-4 py-6 space-y-4">
        <EditorSideBarButton icon={Plus} label="Add Node" />
        <EditorSideBarButton icon={Save} label="Save Flow" />
        <EditorSideBarButton icon={Download} label="Export" />

        {/* Example multiple tool buttons */}
        {[...Array(15)].map((_, idx) => (
          <EditorSideBarButton key={idx} icon={Plus} label={`Tool ${idx + 1}`} />
        ))}
      </div>
    </aside>
  );
};

export default EditorSidebar;
