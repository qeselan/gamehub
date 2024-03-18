import { redirect } from "next/navigation";

import { getSelf } from "@/lib/auth-service";
import { Navbar } from "@/components/browse/dashboard/navbar";
import {
  Sidebar,
  SidebarSkeleton,
} from "@/components/browse/dashboard/sidebar";
import { Container } from "@/components/browse/dashboard/sidebar/container";
import { Suspense } from "react";

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
  const self = await getSelf();

  if (!self) redirect("/");

  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default CreatorLayout;
