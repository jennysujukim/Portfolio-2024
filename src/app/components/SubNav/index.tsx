"use client"

import { usePathname } from "next/navigation";
import Image from "next/image";
// assets
import arrow from '@/app/assets/arrow-left.svg';
// styles
import styles from './SubNav.module.scss';

type GenerateContentProps = {
  path: string;
}

function GenerateContent({ path }: GenerateContentProps) {
  
  if(path !== "/"){
    return(
      <div>
        <button>
          <Image 
            src={arrow}
            width={30}
            height={15}
            alt=""
          />
          Go Back
        </button>
      </div>
    )
  } else {
    return (
      <ul className={styles.container}>
        <li className={styles.button}>
          <button>All</button>
        </li>
        <li className={styles.button}>
          <button>Develop</button>
        </li>
        <li className={styles.button}>
          <button>Design</button>
        </li>
      </ul>
    )
  }
}

export default function SubNav() {

  const pathname = usePathname()

  return (
    <div className={styles.wrapper}>
      <GenerateContent path={pathname} />
    </div>
  )
}
