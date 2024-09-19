"use client"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Work } from '@/types/models';
import { workData } from '@/lib/workData';
// styles
//import styles from './WorkContent.module.scss';

export default function WorkContent() {

  const pathname = usePathname()
  const [ work, setWork ] = useState<Work>()
  const allWorks = workData().works

  useEffect(() => {
    const currentWorkSlug = pathname.split('/')[2];
    setWork(allWorks.find(work => work.slug === currentWorkSlug))
  }, [pathname])

  return (
    <div>{work?.title}</div>
  )
}
