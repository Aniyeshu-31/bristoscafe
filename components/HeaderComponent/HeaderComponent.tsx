import React from 'react'
import styles from './HeaderComponent.module.css'
import Card from '../card/Card'
import Image from 'next/image'
import menu from '../../public/Images/menu.png'
import line from '../../public/Images/sliderImg.png'
import left_arrow from '../../public/Images/left_arrow.png'

const HeaderComponent = () => {
  return (
    
    <div className={styles.HeaderComponent_container}>
      <div className={styles.HeaderComponent_navigation}>
        <div className={styles.HeaderComponent_top}>
        <Image src={left_arrow} alt=""></Image>
        <Image src={menu} alt=""></Image>
        </div>
        <div className={styles.HeaderComponent_bottom}>
        <Image src={line} alt=""></Image>
        </div>
        </div>
      
      <Card/>
    </div>
  )
}

export default HeaderComponent
