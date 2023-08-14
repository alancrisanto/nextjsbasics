'use client';
import Image from 'next/image';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 Alan Crisanto. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icon} width={15} height={15} alt='alan basics facebook'/>
        <Image src="/2.png" className={styles.icon} width={15} height={15} alt='alan basics instagram'/>
        <Image src="/3.png" className={styles.icon} width={15} height={15} alt='alan basics twitter'/>
        <Image src="/4.png" className={styles.icon} width={15} height={15} alt='alan basics youtube'/>
      </div>
    </div>
  )
}

export default Footer