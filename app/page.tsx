"use client"
import React from 'react'
import Catalogue from './components/Catalogue/page'
import Facilities from './components/Facilities/page'
import Footer from './components/Footer/page'
import HeaderComponent from './components/HeaderComponent/page'
import Location from './components/Location/page'
import Offer from './components/Offers/page'
import Popular from './components/PopularFor/page'

const page = () => {
  return(
       <> 
       <HeaderComponent/>
       <Offer/>
       <Popular/>
       <Facilities/>
       <Location/>
       <Catalogue/>
       <Footer/>
       </>
  )
}

export default page