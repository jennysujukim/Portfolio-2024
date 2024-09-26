"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Work } from '@/types/models';
import { workData } from '@/lib/workData';
import Image from 'next/image';
// styles
import styles from './WorkContent.module.scss';
import { ContentType } from '@/types/enums';

export default function WorkContent() {

  const pathname = usePathname()
  const [ work, setWork ] = useState<Work>()
  const allWorks = useMemo(() => workData().works, [])

  useEffect(() => {
    const currentWorkSlug = pathname.split('/')[2];
    setWork(allWorks.find(work => work.slug === currentWorkSlug))
  }, [pathname, allWorks])

  return (
    <>
      {work &&
        <div className={styles.wrapper}>
          <section className={styles.section}>
            <div className={styles.intro_container}>
              {work.content.intro.map((sentence, index) => (
                <p key={index}>{sentence}</p>
              ))}
            </div>
            <div className={styles.text_wrapper}>
              <div className={styles.text_container}>
                <h3>Challenge</h3>
                {work.content.challenge.map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              </div>
              <div className={styles.text_container}>
                <h3>Solution</h3>
                {work.content.solution.map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              </div>
            </div>

          </section>
          <section className={styles.section}>
            {work.content.graphics.map((graphic, index) => (
              <React.Fragment key={index}>
                {graphic.type === ContentType.VIDEO ?
                  <video
                    className={styles.video}
                    width="500" 
                    height="500" 
                    preload="none"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={graphic.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  :
                  <Image 
                    className={styles.image}
                    key={index}
                    src={graphic.src}
                    alt={graphic.alt}
                    width={500}
                    height={500}
                    priority
                    blurDataURL={graphic.placeholder}
                    placeholder='blur'
                    quality={100}
                  />
                }
              </React.Fragment>
            ))}
          </section>
        </div>
      }
    </>
  )
}
