import Image from '@/node_modules/next/image'
import React from 'react'
import styles from './facilities.module.css' // Correct the import path
import facility from "../../../public/Images/FacilitiesImg.png"
const Facilities: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>OFFERS</div> */}
      <div className={styles.ImageContainer}>
        <div className={styles.facilityImage}>
          <Image src={facility} alt="facility" width={250} height={100} />
        </div>
      </div>
    </div>
  )
}

export default Facilities
