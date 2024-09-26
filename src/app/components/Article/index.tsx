import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Work } from "@/types/models";
import { ContentType } from "@/types/enums";
// assets
import { PiArrowCircleUpRightLight } from "react-icons/pi";
// styles
import styles from './Article.module.scss';

type ArticleProps = {
  work: Work;
}

export default function Article({ work } : ArticleProps) {

  return (
    <article className={styles.wrapper}>
      <Link 
        href={`/work/${work.slug}`}
        className={styles.images_container}
      >
        {work.thumbnails.map((thumbnail, index) => (
          <React.Fragment key={index}>
            {thumbnail.type === ContentType.VIDEO ? 
            <video
              className={`${styles.video} ${styles[`transform_${thumbnail.id}`]}`} 
              width="500" 
              height="500" 
              preload="none"
              autoPlay
              loop
              muted
            >
              <source src={thumbnail.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            :
            <Image 
              src={thumbnail.src}
              width={300}
              height={300}
              alt={thumbnail.alt}
              className={`${styles.image} ${styles[`transform_${thumbnail.id}`]}`}
              priority
              placeholder="blur"
              blurDataURL={thumbnail.placeholder}
              quality={100}
            />
            }
          </React.Fragment>
        ))}
      </Link>
      <div className={styles.details_container}>
        <div className={styles.details_left}>
          <div className={styles.details_title}>
            <h2>{work.title}</h2>
            <PiArrowCircleUpRightLight size={24} />
          </div>
          <p>{work.description}</p>
        </div>
        <div className={styles.details_right}>
          {work.keywords.map((keyword, index) => (
            <span 
              key={index}
              className={styles.keyword}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
