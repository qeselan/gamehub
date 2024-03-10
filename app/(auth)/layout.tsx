import { Logo } from "@/components/auth/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-end pt-2 pr-2">
        <ThemeToggle />
      </div>
      <div className="flex flex-col h-full items-center justify-center space-y-5">
        <Logo />
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
