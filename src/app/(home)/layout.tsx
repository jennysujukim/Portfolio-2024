import { Suspense } from 'react';
// components
import Sidebar from '@/app/components/Sidebar';
import Loading from './loading';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="sidebar_wrapper">
        <Sidebar />
      </div>
      <Suspense fallback={<Loading />}>
      <div className="main_wrapper">
        {children}
      </div>
      </Suspense>
    </>
  );
}
