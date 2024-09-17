// components
import Sidebar from '@/app/components/Sidebar';
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
        {children}
      </div>
    </>
  );
}
