import { Container } from "@/components/browse/container";
import { Navbar } from "@/components/browse/navbar";
import { Sidebar, SidebarSkeleton } from "@/components/browse/sidebar";
import { Suspense } from "react";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
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

export default BrowseLayout;
