import React from 'react'
import HomeNavbar from './HomeNavbar'
import HomeMain from './HomeMain'
import "./Homepage.css"
import Footer from './Footer'

const Homepage = () => {
  return (
   <div className='container-fluid home-main-container d-flex flex-column bg-white vh-100 p-0'> 
   <div className='navbar-main-container vw-100'>
   <HomeNavbar />
   </div>
   <div className='body-main-container mt-0'>
  <HomeMain />
   </div>
   <div className='footbar-main-container'>
    <Footer />

   </div>
  </div>
  )
}

export default Homepage 
