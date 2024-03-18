"use client";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
    <div className={cn("flex-1 ml-[70px]", !collapsed && "lg:ml-60")}>
      {children}
    </div>
  );
};
