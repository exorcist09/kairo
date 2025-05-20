import React from "react";
import { GripVerticalIcon, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const NodeHeader = () => {
  return (
    <div className="flex items-center justify-around gap-2 p-2 bg-blue-600/80">
      <Badge>Node Name</Badge>
      <div className="flex items-center justify-center">
        <Button variant="ghost" size="icon">
          <X size={12} />
        </Button>
        <GripVerticalIcon size={20} />
      </div>
    </div>
  );
};

export default NodeHeader;
