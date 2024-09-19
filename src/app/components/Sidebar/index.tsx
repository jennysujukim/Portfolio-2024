"use client"

import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { workData } from "@/lib/workData";
import { Work } from "@/types/models";
// assets
import logo from "@/app/assets/logo-2.svg";
import arrowRight from "@/app/assets/arrow-right.svg";
// components
import Header from "@/app/components/Header";
// styles
import styles from "./Sidebar.module.scss";

type GenerateContentProps = {
  path: string;
  work: Work | undefined;
}

function GenerateContent({ path, work }: GenerateContentProps){

  if(path === '/'){
    return(
      <div className={styles.content_container}>
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
      </div>
    )
  } else if(path === '/about'){
      return(
        <div className={styles.content_container}>
          <Image 
            src={logo}
            alt="logo of Jenny Kim Portfolio"
            width={100}
            height={50}
            className={styles.logo}
          />
          <div className={styles.content}>
            <Image 
              src="/about/profile.jpg"
              alt="Image of Jenny Kim"
              width={300}
              height={300}
              className={styles.profile}
            />
          </div>
        </div>
      )
  } else if(path.includes("/work")) {
    return (
      <>
        {work &&
          <>
            <div className={styles.content_container}>
              <div className={styles.work_title_container}>
                <h1 className={styles.work_title}>{work.title}</h1>
                <span className={styles.work_type}>{work.type}</span>
              </div>
              <div className={styles.work_description_container}>
                <p>{work.description}</p>
                <div className={styles.work_keywords_container}>
                  {work.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className={styles.work_keyword}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.details_container}>
                <h6>View</h6>
                <Image 
                  src={arrowRight}
                  alt=""
                  width={20}
                  height={10}
                  className={styles.arrow}
                />
                <div>
                  <Link 
                    href={work.livesite}
                    target="_blank"
                  >
                    Livesite,
                  </Link>
                  <Link
                    href={work.repo}
                    target="_blank"
                  >
                    Repo
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.work_problemsolving}>
              <div className={styles.work_problemsolving_container}>
                <h3>About</h3>
                {work.content.intro.map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              </div>
              <div className={styles.work_problemsolving_container}>
                <h3>Challenge</h3>
                {work.content.challenge.map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              </div>
              <div className={styles.work_problemsolving_container}>
                <h3>Solution</h3>
                {work.content.solution.map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              </div>
            </div>
          </>
        }
      </>
    )
  }
}

export default function Sidebar() {
  const pathname = usePathname()
  const work = workData().works.find((work) => work.slug === pathname.split('/')[2])

  return (
    <div className={styles.wrapper}>
      <GenerateContent path={pathname} work={work} />
      <Header path={pathname} />
    </div>
  )
}
