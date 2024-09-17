"use client"

import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
// assets
import logo from "@/app/assets/logo.svg";
import profile from "@/app/assets/profile.jpg";
import arrowRight from "@/app/assets/arrow-right.svg";
// components
import Header from "@/app/components/Header";
// styles
import styles from "./Sidebar.module.scss";

type GenerateContentProps = {
  path: string;
}

function GenerateContent({ path }: GenerateContentProps){

  if(path === '/'){
    return(
      <>
        <Image 
          src={logo}
          alt="logo of Jenny Kim Portfolio"
          width={100}
          height={50}
          className={styles.logo}
        />
        <div className={styles.content}>
          <h1>
            Hi! I’m <span className={styles.bold}>UIUX Engineer</span> building and designing <span className={styles.underline}>interactive</span> user experiences on the <span className={styles.circle}><div className={styles.circle_shape}></div>web</span> with the strong foundations of design.
          </h1>
        </div>
        <div className={styles.details_wrapper}>
          <div className={styles.details_container}>
            <h6>Contact</h6>
            <Image 
              src={arrowRight}
              alt=""
              width={20}
              height={10}
              className={styles.arrow}
            />
            <Link 
              href="mailto:jennysujukim@gmail.com" 
              target="_blank"
            >
              Email
            </Link>
          </div>
          <div className={styles.details_container}>
            <h6>Follow</h6>
            <Image 
              src={arrowRight}
              alt=""
              width={20}
              height={10}
              className={styles.arrow}
            />
            <div>
                <Link 
                  href="https://www.linkedin.com/in/jenny-seojeong-kim/" 
                  target="_blank"
                >
                  LinkedIn,
                </Link>
                <Link 
                  href="https://github.com/jennysujukim" 
                  target="_blank"
                >
                  Github,
                </Link>
                <Link 
                  href="https://www.instagram.com/byjennykim/" 
                  target="_blank"
                >
                  IG
                </Link>
            </div>
          </div>
        </div>
      </>
    )
  } else if(path === '/about'){
      return(
        <>
          <Image 
            src={logo}
            alt="logo of Jenny Kim Portfolio"
            width={100}
            height={50}
            className={styles.logo}
          />
          <div className={styles.content}>
            <Image 
              src={profile}
              alt="Image of Jenny Kim"
              width={300}
              height={300}
              className={styles.profile}
            />
          </div>
        </>
      )
  } else {
    return (
      <>
        This is rest.
      </>
    )
  }
}

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className={styles.wrapper}>
      <div className={styles.content_container}>
        <GenerateContent path={pathname} />
      </div>
      <Header path={pathname} />
    </div>
  )
}
