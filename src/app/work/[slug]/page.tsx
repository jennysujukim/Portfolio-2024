import { workData } from "@/lib/workData";
// styles
import styles from "./workPage.module.scss";

export default function WorkPage() {

  const works = workData().works;

  return (
    <div className={styles.page}>

    </div>
  )
}
