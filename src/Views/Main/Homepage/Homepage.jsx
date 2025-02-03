import React from 'react'
import HomeNavbar from './HomeNavbar'

import "./Homepage.css"
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  return (
   <div className='home-main-container d-flex flex-column bg-white p-0'> 
   <div className='navbar-main-container'>
   <HomeNavbar />
   </div>
   <div className='body-main-container mt-0'>
    <Outlet />
   </div>
   <div className='footbar-main-container'>
    <Footer />

   </div>
  </div>
  )
}

export default Homepage 
