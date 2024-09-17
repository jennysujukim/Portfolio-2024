"use client"
import { usePathname } from "next/navigation"
// styles
import styles from './SubNav.module.scss';

function GenerateContent() {
  const pathname = usePathname()

  if(pathname !== "/"){
    return(
      <div>
        <button>Go Back</button>
      </div>
    )
  } else {
    return (
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Develop</button>
        </li>
        <li>
          <button>Design</button>
        </li>
      </ul>
    )
  }
}

export default function SubNav() {
  return (
    <div className={styles.wrapper}>
      <GenerateContent />
    </div>
  )
}
