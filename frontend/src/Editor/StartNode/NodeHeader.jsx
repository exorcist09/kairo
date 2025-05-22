import React, { useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NodeHeader = ({ onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete();
  };

  return (
    <div className="flex items-center justify-between gap-2 mt-0">
      <Badge className="bg-blue-600 text-white">Node</Badge>
      <Button
        variant="ghost"
        size="icon"
        className="bg-gray-400 rounded-full size-7 text-black"
        onClick={handleDelete}
      >
        <X size={12} />
      </Button>
    </div>
  );
};

export default NodeHeader;
