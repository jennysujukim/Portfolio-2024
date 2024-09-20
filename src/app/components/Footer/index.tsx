"use client"
import { useEffect, useState } from 'react';

import styles from './Footer.module.scss';

export default function Footer() {

  const [ isTime, setIsTime ] = useState<string>('')

  useEffect(() => {
    const updateCurrentTime = () => {
      const d = new Date();
      const dateStr = d.toLocaleString('en-CA', {
        timeZone: 'America/Vancouver',
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });
      const formattedDate = dateStr.replace(/(\d{1,2}) (.*) (\d{4}), (.*)/, '$1 $2 $3 at $4');
      setIsTime(formattedDate);
    };
    updateCurrentTime();
  
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);

  }, [setIsTime]);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_texts}>
        <p>Currently in Vancouver | {isTime}</p>
        <p>&copy;JENNY KIM 2024</p>
      </div>
    </footer>
  )
}

