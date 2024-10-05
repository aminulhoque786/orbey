import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Light from '../components/Light'
// import New from '../components/New'
import Seller from '../components/Seller'
import Phone from '../components/Phone'
import Offers from '../components/Offers'
import Footer from '../components/Footer'
import Arrival from '../components/Arrival'


const Home = () => {
  return (
   <>
 <Navbar/>
 <Banner/>
 <Light/>
 <Arrival/>
 {/* <New/> */}
 <Seller/>
 <Phone/>
 <Offers/>
 <Footer/>
   </>
  )
}

export default Home