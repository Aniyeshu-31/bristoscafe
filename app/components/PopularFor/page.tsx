import Image from '@/node_modules/next/image'
import React from 'react'
import styles from './popular.module.css' // Correct the import path
import popularImg from "../../../public/Images/popularFor.png"
const Popular: React.FC = () => {
  return (
    <div className={styles.container}>
        {/* <div className={styles.title}>OFFERS</div> */}
        <div className={styles.ImageContainer}>
      <div className={styles.offerImage}>
        <Image src={popularImg} alt="offerImg" width={250} height={100} />
      </div>
    </div>
    </div>
  )
}

export default Popular
