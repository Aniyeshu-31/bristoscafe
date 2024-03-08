import Image from '@/node_modules/next/image'
import React from 'react'
import styles from './location.module.css' // Correct the import path
import locationImg from "../../../public/Images/Location.png"
const Location: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>OFFERS</div> */}
      <div className={styles.ImageContainer}>
        <div className={styles.facilityImage}>
          <Image src={locationImg} alt="facility" width={250} height={200} />
        </div>
      </div>
    </div>
  )
}

export default Location
