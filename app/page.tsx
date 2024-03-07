import React from 'react'
import Catalogue from './components/Catalogue/page'
import Footer from './components/Footer/page'
import HeaderComponent from './components/HeaderComponent/page'

const page = () => {
  return(
       <> 
       <HeaderComponent/>
       <Catalogue/>
       <Footer/>
       </>
  )
}

export default page