import { workData } from "@/lib/workData";
// components
import Article from "../components/Article";
// styles
import styles from "./homePage.module.scss";

export default function HomePage() {

  const works = workData().works

  return (
    <div className={styles.page}>
      {works.map((work, index) => (
        <div key={index}>
          <Article work={work} />
        </div>
      ))}
    </div>
  );
}
