import { Logo } from "@/components/auth/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col h-full items-center justify-center space-y-5">
        <Logo />
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
