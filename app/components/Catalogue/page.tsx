import Image from '@/node_modules/next/image'
import React from 'react'
import styles from './catalogue.module.css' // Correct the import path
import leftImg from "../../../public/Images/cafe01.png"
import rightImg from "../../../public/Images/cafe03.png"
const Catalogue: React.FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>CATALOGUE</div>
        <div className={styles.ImageContainer}>
      <div className={styles.leftImage}>
        <Image src={leftImg} alt="leftImg" width={120} height={120} />
      </div>
      <div className={styles.rightImage}>
        <Image src={rightImg} alt="leftImg" width={120} height={120} />
      </div>
    </div>
    </div>
  )
}

export default Catalogue
