import {
  Navigation,
  NavigationSkeleton,
} from "@/components/browse/dashboard/sidebar/navigation";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = async () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-primary z-50">
      <ToggleSkeleton />
      <NavigationSkeleton />
    </aside>
  );
};
