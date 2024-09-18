"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CategoryType } from "@/types/enums";
// assets
import arrow from '@/app/assets/arrow-left.svg';
// styles
import styles from './SubNav.module.scss';

type GenerateContentProps = {
  path: string;
  handleClickFilter: (value: CategoryType) => void;
}

type SubNavProps = {
 handleClickFilter: (value: CategoryType) => void;
}

function GenerateContent({ path, handleClickFilter }: GenerateContentProps) {

  if(path !== "/"){
    return(
      <div>
        <Link href="/">
          <Image 
            src={arrow}
            width={30}
            height={15}
            alt=""
          />
          Go Back
        </Link>
      </div>
    )
  } else {
    return (
      <ul className={styles.container}>
        <li className={styles.button}>
          <button onClick={() => handleClickFilter(CategoryType.ALL)}>{CategoryType.ALL}</button>
        </li>
        <li className={styles.button}>
          <button onClick={() => handleClickFilter(CategoryType.DEVELOP)}>{CategoryType.DEVELOP}</button>
        </li>
        <li className={styles.button}>
          <button onClick={() => handleClickFilter(CategoryType.DESIGN)}>{CategoryType.DESIGN}</button>
        </li>
      </ul>
    )
  }
}

export default function SubNav({ handleClickFilter }: SubNavProps) {

  const pathname = usePathname()

  return (
    <div className={styles.wrapper}>
      <GenerateContent path={pathname} handleClickFilter={handleClickFilter} />
    </div>
  )
}
