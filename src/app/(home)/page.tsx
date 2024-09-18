"use client"
import { useState, useEffect } from "react";
import { workData } from "@/lib/workData";
import { CategoryType } from "@/types/enums";
import { Work } from "@/types/models";
// components
import Article from "@/app/components/Article";
import SubNav from "@/app/components/SubNav";
// styles
import styles from "./homePage.module.scss";

export default function HomePage() {

  const [ category, setCategory ] = useState<CategoryType>(CategoryType.ALL)
  const [ selectedWorks, setSelectedWorks ] = useState<Work[]>([])

  const handleClickFilter = (value: CategoryType) => {
    setCategory(value)
  }

  const allWorks = workData().works
  const devWorks = allWorks.filter(work => work.category.includes(CategoryType.DEVELOP))
  const desWorks = allWorks.filter(work => work.category.includes(CategoryType.DESIGN))

  useEffect(() => {

    if(category === CategoryType.ALL){
      setSelectedWorks(allWorks)
    } else if(category === CategoryType.DEVELOP){
      setSelectedWorks(devWorks)
    } else if(category === CategoryType.DESIGN) {
      setSelectedWorks(desWorks)
    } else {
      return;
    }
  }, [category, setSelectedWorks])

  return (
    <>
      <SubNav handleClickFilter={handleClickFilter} />
      <div className={styles.page}>
        {selectedWorks.map((work, index) => (
          <div key={index}>
            <Article work={work} selectedCategory={category} />
          </div>
        ))}
      </div>
    </>
  );
}
