import Image from "next/image";
import Link from "next/link";
import { Work } from "@/types/models"
// assets
import arrowUpRight from "@/app/assets/arrow-up-right.svg"
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
          // <Image 
          //   key={index}
          //   src={thumbnail.src}
          //   width={300}
          //   height={300}
          //   alt={thumbnail.alt}
          //   className={styles.image}
          // />
          <div 
            key={index} 
            className={`${styles.image} ${styles[`transform_${thumbnail.id}`]}`}
          >
            {thumbnail.src}
          </div>
        ))}
      </Link>
      <div className={styles.details_container}>
        <div className={styles.details_left}>
          <div className={styles.details_title}>
            <h2>{work.title}</h2>
            <Image 
              src={arrowUpRight}
              width={16}
              height={16}
              alt=""
            />
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
