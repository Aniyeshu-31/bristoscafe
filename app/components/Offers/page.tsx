import Image from '@/node_modules/next/image'
import React from 'react'
import styles from './offers.module.css' // Correct the import path
import offerImg from "../../../public/Images/offerImg.png"
const Offer: React.FC = () => {
  return (
    <div className={styles.container}>
        {/* <div className={styles.title}>OFFERS</div> */}
        <div className={styles.ImageContainer}>
      <div className={styles.offerImage}>
        <Image src={offerImg} alt="offerImg" width={270} height={120} />
      </div>
    </div>
    </div>
  )
}

export default Offer
