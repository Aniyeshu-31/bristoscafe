import React from 'react'
import styles from './Card.module.css'
import phone from '../../public/Images/phone.png'
import Image from 'next/image'
import star from '../../public/Images/star.svg'
const Card = () => {
  return (
    <div className={styles.card_container}>
        <div className={styles.card_title}>
        
          <h1>Birsto Cafe</h1>
          <Image className={styles.card_phone_image}src={phone} alt=""/>
          </div>
         
          <p className={styles.card_text}>c-7, Connaught Place ,New Delhi</p>
          <p className={styles.card_text}><p className={styles.card_bold}> <Image className={styles.pd_3}src={star}alt=""></Image>Rated 4.7 </p>, with 43 Reviews</p>
       
        <div className={styles.card_description}>
         <p className={styles.card_text}> For the past five year I've been  a chef  at TelAviv resturents and now
          < p className={styles.card_bold}>Learn More.. </p> </p>
        </div>
    </div>
  )
}

export default Card
