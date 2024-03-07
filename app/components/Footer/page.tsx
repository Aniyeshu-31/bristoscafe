import Image from '@/node_modules/next/image'
import React from 'react'
import styles from './footer.module.css' // Correct the import path
import version from "../../../public/Images/version.png"
const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topContainer}>
            <Image className={styles.img} src={version} alt="" width={100} height={32}/>
        </div>
        <div className={styles.bottomContainer}>
             <div className={styles.rectangle}></div>
        </div>
    </div>
  )
}

export default Footer
