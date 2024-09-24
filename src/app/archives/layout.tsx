// components
import Sidebar from "@/app/components/Sidebar";

export default function ArchivesLayout({
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
        {children}
      </div>
    </>
  );
}
