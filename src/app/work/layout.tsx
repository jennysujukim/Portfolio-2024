// components
import Sidebar from '@/app/components/Sidebar';

export default function AllWorkLayout({
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
