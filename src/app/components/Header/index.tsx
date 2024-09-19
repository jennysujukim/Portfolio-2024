import Link from 'next/link'
import Image from 'next/image';
// assets
import arrowUpRight from '@/app/assets/arrow-up-right.svg';
// styles
import styles from './Header.module.scss'

type HeaderProps = {
  path: string;
}

export default function Header({ path }: HeaderProps) {
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
                  Resume
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
    </>
  )
}
