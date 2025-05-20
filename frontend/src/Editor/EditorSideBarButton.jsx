import React from "react";
import { cn } from "@/lib/utils"; // if you're using className utilities
// import { LucideIcon } from "lucide-react"; // optional type for icon

const EditorSideBarButton = ({ icon: Icon, label, className, ...props }) => {
  return (
    <button
      className={cn(
        "flex items-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 rounded-md shadow-sm transition",
        className
      )}
      {...props}
    >
      {Icon && <Icon className="mr-3 w-5 h-5 text-blue-600" />}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default EditorSideBarButton;
