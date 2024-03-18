import { Actions } from "./actions";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] px-2 lg:px-3 flex justify-between items-center shadow-sm bg-secondary">
      <Logo />
      <div className="flex items-center gap-x-4">
        <Actions />
      </div>
    </nav>
  );
};
