import Image from "next/image";
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
      <div className={styles.images_container}>
        {work.thumbnails.map((thumbnail, index) => (
          <Image 
            key={index}
            src={thumbnail.src}
            width={100}
            height={100}
            alt={thumbnail.alt}
          />
        ))}
      </div>
      <div>
        <div>
          <h2>{work.title}</h2>
          <Image 
            src={arrowUpRight}
            width={20}
            height={20}
            alt=""
          />
        </div>
        <p>{work.description}</p>
      </div>
      <div>
        {work.keywords.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </div>
    </article>
  )
}
