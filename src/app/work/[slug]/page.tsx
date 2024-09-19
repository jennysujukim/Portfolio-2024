// components
import SubNav from '@/app/components/SubNav';
import WorkContent from "@/app/components/WorkContent";
// styles
import styles from "./workPage.module.scss";

export default function WorkPage() {
  return (
    <>
      <SubNav />
      <div className={styles.page}>
        <WorkContent />
      </div>
    </>
  )
}
