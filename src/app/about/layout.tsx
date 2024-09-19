// components
import Sidebar from "@/app/components/Sidebar";
import SubNav from "../components/SubNav";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="sidebar_wrapper">
        <Sidebar />
      </div>
      <div className="main_wrapper">
        <SubNav />
        {children}
      </div>
    </>
  );
}