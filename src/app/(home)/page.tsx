"use client"
import { useState, useEffect, useMemo } from "react";
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

  const allWorks = useMemo(() => workData().works, [])
  const devWorks = useMemo(() => workData().works.filter(work => work.category.includes(CategoryType.DEVELOP)), [])
  const desWorks = useMemo(() => workData().works.filter(work => work.category.includes(CategoryType.DESIGN)), [])


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
  }, [category, setSelectedWorks, allWorks, desWorks, devWorks])

  return (
    <>
      <SubNav
        selectedCategory={category}
        handleClickFilter={handleClickFilter}
      />
      <div className={styles.page}>
        {selectedWorks.map((work, index) => (
          <Article 
            work={work} 
            key={index}
          />
        ))}
      </div>
    </>
  );
}
