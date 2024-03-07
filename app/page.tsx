import React from 'react'
import Catalogue from './components/Catalogue/page'
import Footer from './components/Footer/page'
import HeaderComponent from './components/HeaderComponent/page'
const page = () => {
  return (
   <div className="maincontainer">
     <HeaderComponent/>
    <Catalogue/>
    <Footer/>
   </div>
  )
}

export default page