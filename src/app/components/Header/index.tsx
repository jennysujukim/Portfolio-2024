import Link from 'next/link'
// styles
import styles from './Header.module.scss'

type HeaderProps = {
  path: string;
  onClickScroll: (id: string) => void;
}

export default function Header({ path, onClickScroll }: HeaderProps) {
  return (
    <>
      {path === '/' &&
        <header className={styles.header}>
          <nav>
            <ul className={styles.nav}>
              <li className={styles.navlink}>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link 
                  href="/resume" 
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/archives">
                  Archives
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      }
      {path === '/about' && 
        <ul className={styles.header}>
          <li
            className={styles.navlink_about} 
            onClick={() => onClickScroll("introduction")}
          >
            Hello, stranger!
          </li>
          <li 
            className={styles.navlink_about} 
            onClick={() => onClickScroll("summary")} 
          >
            TLDR
          </li>
          {/* <li
            className={styles.navlink_about}  
            onClick={() => onClickScroll("playlists")}
          >
            Ear Pleasing
          </li> */}
        </ul>
      }
      {path.includes('/work') &&
        <header className={styles.header}>
          <nav>
            <ul className={styles.nav}>
              <li className={styles.navlink}>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link 
                  href="/resume" 
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/archives">
                  Archives
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      }
      {path === '/archives' &&
        <header className={styles.header}>

        </header>
      }
    </>
  )
}
