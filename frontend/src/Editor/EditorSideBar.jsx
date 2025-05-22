import React from "react";
import EditorSideBarButton from "./EditorSideBarButton";
import {
  Code,
  FileUp,
  HardDrive,
  IndianRupee,
  Mail,
  Play,
  Plus,
} from "lucide-react";
import { Clock, FileText } from "lucide-react";

const tools = [
  { icon: HardDrive, label: "Drive", type: "driveNode" },
  { icon: Clock, label: "Delay", type: "delayNode" },
  { icon: Play, label: "Schedule Trigger", type: "triggerNode" },
  { icon: Mail, label: "Email", type: "emailNode" },
  { icon: IndianRupee, label: "Payment", type: "paymentNode" },
  { icon: FileUp, label: "File Upload", type: "fileUploadNode" },
  { icon: Code, label: "Logic ", type: "LogicNode" },
];

const EditorSidebar = ({ addNode }) => {
  return (
    <aside className="w-72 h-full bg-white border-r-4 border-gray-300 fixed top-16 bottom-10 left-0 ">
      <div className="h-full overflow-y-auto px-4 py-6 space-y-4">
        {tools.map(({ icon: Icon, label, type }) => (
          <EditorSideBarButton
            key={type}
            icon={Icon}
            label={label}
            onClick={() => addNode(type)}
          />
        ))}
      </div>
    </aside>
  );
};

export default EditorSidebar;
