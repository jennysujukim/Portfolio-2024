import Link from 'next/link'
import Image from 'next/image';
// assets
import arrowUpRight from '@/app/assets/arrow-up-right.svg';
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
                  <Image 
                    src={arrowUpRight}
                    width={20}
                    height={20}
                    alt=''
                    className={styles.arrow}
                  />
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link 
                  href="/resume" 
                  target="_blank"
                >
                  CV
                  <Image 
                    src={arrowUpRight}
                    width={20}
                    height={20}
                    alt=''
                    className={styles.arrow}
                  />
                </Link>
              </li>
              {/* <li className={styles.navlink}>
                <Link href="/archives">
                  Archives
                  <Image 
                    src={arrowUpRight}
                    width={20}
                    height={20}
                    alt=''
                    className={styles.arrow}
                  />
                </Link>
              </li> */}
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
    </>
  )
}
