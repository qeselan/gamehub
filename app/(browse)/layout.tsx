import { Container } from "@/components/browse/container";
import { Navbar } from "@/components/browse/navbar";
import { Sidebar } from "@/components/browse/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
