"use client"

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CategoryType } from "@/types/enums";
import { workData } from "@/lib/workData";
// styles
import styles from './SubNav.module.scss';

type GenerateContentProps = {
  path: string;
  nextWork?: string;
  selectedCategory?: CategoryType;
  handleClickFilter?: (value: CategoryType) => void;
}

type SubNavProps = {
  nextWork?: string;
  selectedCategory?: CategoryType;
  handleClickFilter?: (value: CategoryType) => void;
}

function GenerateContent({ path, nextWork, selectedCategory, handleClickFilter }: GenerateContentProps) {

  if(path.includes("/work")){
    return(
      <div className={styles.container}>
        <Link 
          href="/"
          className={`${styles.button} ${styles.button_goback}`}
        >
          <div className={styles.button_inner}>
            Go Back
          </div>
        </Link>
        <Link 
          href={`/work/${nextWork}`}
          className={`${styles.button} ${styles.button_next}`}
        >
          <div className={styles.button_inner}>
            View Next
          </div>

        </Link>
      </div>
    )
  } else if(path === "/about") {
    return(
      <div className={styles.container}>
        <Link 
          href="/"
          className={`${styles.button} ${styles.button_goback}`}
        >
          <div className={styles.button_inner}>
            Go Back
          </div>
        </Link>
      </div>
    )
  } else {
    return (
      <>
        {handleClickFilter && selectedCategory &&
          <ul className={styles.container}>
            <li className={selectedCategory === CategoryType.ALL ? `${styles.button} ${styles.active}` : styles.button}>
              <button 
                className={styles.button_inner}
                onClick={() => handleClickFilter(CategoryType.ALL)}
              >
                {CategoryType.ALL}
              </button>
            </li>
            <li className={selectedCategory === CategoryType.DEVELOP ? `${styles.button} ${styles.active}` : `${styles.button}`}>
              <button 
                className={selectedCategory === CategoryType.DEVELOP ? `${styles.button_inner} ${styles.active_dev}` : styles.button_inner}
                onClick={() => handleClickFilter(CategoryType.DEVELOP)}
              >
                {CategoryType.DEVELOP}
              </button>
            </li>
            <li className={selectedCategory === CategoryType.DESIGN ? `${styles.button} ${styles.active}` : styles.button}>
              <button 
                className={styles.button_inner}
                onClick={() => handleClickFilter(CategoryType.DESIGN)}
              >
                {CategoryType.DESIGN}
              </button>
            </li>
          </ul>
        }
      </>
    )
  }
}

export default function SubNav({ handleClickFilter, selectedCategory }: SubNavProps) {

  const pathname = usePathname()
  const [ nextWorkSlug, setNextWorkSlug ] = useState<string>('')
  // const allWorks = workData().works

  const allWorks = useMemo(() => workData().works, [])

  useEffect(() => {
    const currentWorkSlug = pathname.split('/')[2]
    const currentIndex = allWorks.findIndex(work => work.slug === currentWorkSlug)
    const nextIndex = (currentIndex + 1) % allWorks.length
    const nextWork = allWorks[nextIndex]

    setNextWorkSlug(nextWork.slug)
  }, [pathname, allWorks])

  return (
    <div className={styles.wrapper}>
      <GenerateContent 
        nextWork={nextWorkSlug}
        path={pathname} 
        handleClickFilter={handleClickFilter}
        selectedCategory={selectedCategory}
      />
    </div>
  )
}
