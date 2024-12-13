import React from "react";

import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";

function WorkflowLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col">
      {children}
      <Separator />
      <footer className="flex items-center justify-between p-2">
        <Logo iconSize={16} fontSize="text-xl" />
        <ModeToggle />
      </footer>
    </div>
  );
}

export default WorkflowLayout;
