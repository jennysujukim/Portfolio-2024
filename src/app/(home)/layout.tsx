// components
import Sidebar from '@/app/components/Sidebar';
import SubNav from '@/app/components/SubNav';
// styles
// import styles from './homePage.module.scss';

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
      <div className="main_wrapper">
        <SubNav />
        {children}
      </div>
    </>
  );
}
