"use client"
import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { workData } from "@/lib/workData";
import { Work } from "@/types/models";
// assets
import logo from "@/app/assets/logo.svg";
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

  const imgSrcs = [ 
    "/about/profile-1.jpg", 
    "/about/profile-2.jpg", 
    "/about/profile-3.jpg", 
    "/about/profile-4.jpg",
    "/about/profile-5.jpg", 
    "/about/profile-6.jpg", 
    "/about/profile-7.jpg", 
    "/about/profile-8.jpg"
  ]

  const imgDescriptions = [
    "This is me smiling :)", 
    "After 10hrs of hiking!", 
    "When traveling Montreal!", 
    "I love hiking",
    "At top of the Quebec city", 
    "The most coolest dog", 
    "I just like this photo", 
    "Keep walking and enjoying"
  ]

  const [currentImg, setCurrentImg] = useState<string>(imgSrcs[0])
  const [ currentDescription, setCurrentDescription ] = useState<string>(imgDescriptions[0])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  // CLICK EVENT //
  const handleClickProfile = () => {
    const nextIndex = (currentIndex + 1) % imgSrcs.length
    setCurrentImg(imgSrcs[nextIndex])
    setCurrentDescription(imgDescriptions[nextIndex])
    setCurrentIndex(nextIndex)
  }

  // SPACEBAR PRESS EVENT //
  useEffect(() => {
  const keyPressimgSrcs = [ 
    "/about/profile-1.jpg", 
    "/about/profile-2.jpg", 
    "/about/profile-3.jpg", 
    "/about/profile-4.jpg",
    "/about/profile-5.jpg", 
    "/about/profile-6.jpg", 
    "/about/profile-7.jpg", 
    "/about/profile-8.jpg"
  ]

  const keyPressimgDescriptions = [
    "This is me smiling :)", 
    "After 10hrs of hiking!", 
    "When traveling Montreal!", 
    "I love hiking",
    "At top of the Quebec city", 
    "The most coolest dog", 
    "I just like this photo", 
    "Keep walking and enjoying"
  ]

    const changeProfile = () => {
      const nextIndex = (currentIndex + 1) % keyPressimgSrcs.length
      setCurrentImg(keyPressimgSrcs[nextIndex])
      setCurrentDescription(keyPressimgDescriptions[nextIndex])
      setCurrentIndex(nextIndex)
    }
    
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        changeProfile();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentIndex]); 

  if(path === '/'){
    return(
      <div className={styles.content_container}>
        <Link href="/">
          <Image 
            src={logo}
            alt="logo of Jenny Kim Portfolio"
            width={100}
            height={50}
            className={styles.logo}
            draggable={false}
          />
        </Link>
        <div className={styles.content}>
          <h1>
            Hi! I’m <span className={styles.bold}>UIUX Engineer</span> building and designing <span className={styles.underline}>interactive</span> user experiences on the <span>web</span> with the strong foundations of design.
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
          <Link href="/">
            <Image 
              src={logo}
              alt="logo of Jenny Kim Portfolio"
              width={100}
              height={50}
              className={styles.logo}
              draggable={false}
            />
          </Link>
          <div 
            className={styles.content_about}
            onClick={handleClickProfile}
          >
            <Image 
              src={currentImg}
              alt="Image of Jenny Kim"
              width={300}
              height={300}
              draggable={false}
              className={styles.profile}
            />
            <span className={styles.profile_cta}>* Click Image or Press Spacebar *</span>
            <span className={styles.profile_description}>{currentDescription}</span>
          </div>
          <div className={styles.details_wrapper_about}>
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
            <div className={styles.details_container}>
              <h6>Download</h6>
              <Image 
                src={arrowRight}
                alt=""
                width={20}
                height={10}
                className={styles.arrow}
              />
              <Link 
                href="https://www.linkedin.com/in/jenny-seojeong-kim/" 
                target="_blank"
              >
                CV
              </Link>
            </div>
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
          </>
        }
      </>
    )
  }
}

export default function Sidebar() {
  const pathname = usePathname()
  const work = workData().works.find((work) => work.slug === pathname.split('/')[2])

  const onClickScroll = (id: string) => {
    const target = document.getElementById(id)
    if(target){
      target.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.wrapper}>
      <GenerateContent path={pathname} work={work} />
      <Header 
        path={pathname} 
        onClickScroll={onClickScroll}
      />
    </div>
  )
}
