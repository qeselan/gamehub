"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { SidebarSkeleton } from ".";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient) {
    return <SidebarSkeleton />;
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col h-full bg-secondary shadow-inner z-50 w-[70px]",
        !collapsed && "lg:w-60"
      )}
    >
      {children}
    </aside>
  );
};
