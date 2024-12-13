import { cookies } from "next/headers";

import DesktopSidebar from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import { ModeToggle } from "@/components/ModeToggle";
import { auth } from "@/auth";
import { UserNav } from "@/components/NavUser";

export async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DesktopSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-between px-6 py-4 container h-[50px]">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <BreadcrumbHeader />
          </div>
          <div className="flex items-center gap-2">
            <UserNav user={session?.user ?? null} />
            <ModeToggle />
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="container flex flex-1 py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default layout;
