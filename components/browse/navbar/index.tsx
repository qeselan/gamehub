import { ThemeToggle } from "@/components/theme-toggle";
import { Actions } from "./actions";
import { Logo } from "./logo";
import { Search } from "./search";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] px-2 lg:px-3 flex justify-between items-center shadow-sm bg-secondary">
      <Logo />
      <Search />
      <div className="flex items-center gap-x-4">
        <Actions />
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
