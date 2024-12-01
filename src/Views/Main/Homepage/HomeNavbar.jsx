import React, { useState } from "react";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Homepage.css"
import { NavLink } from "react-router-dom";


const HomeNavbar = () => {
    const [show, setShow] = useState(false);
    const handleModel = ()=>setShow(!show)

  return (
    <>
    <div className="homepage-navbar">
      <div className="navbar-discout-container bg-dark p-2 d-flex">
        <div className="col-4 d-none d-lg-flex justify-content-center align-items-center border-end border-white">
          <div className="d-flex">
            <p>
              <SiMinutemailer color="green" size={40} />
            </p>
            <div className="d-flex align-items-center ms-2">
              <p className="text-white fs-5 me-2">Email:</p>
              <p className="text-success fs-5">info@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center ">
          <p className="fs-5 text-white text-wrap">
            50% off Your Next Trip.Hurry Up For Your Next Trip!! Book Your Trip
          </p>
        </div>
        <div className="col-3 d-none d-lg-flex justify-content-center align-items-center border-start border-white">
          <div className="d-flex gap-4">
            <a href="">
              <MdFacebook size={40} color="white" />
            </a>
            <a href="">
              <FaTwitter size={40} color="white" />
            </a>
            <a href="">
              <FaInstagram size={40} color="white" />
            </a>
            <a href="">
              <FaGoogle size={40} color="white" />
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-menu-container bg-success-subtle p-2 d-flex justify-content-between">
        <div className="col-lg-2 col-6 col-sm-6 nav-menu-logo">
          <h2>Wildlens Tour</h2>
        </div>
        <div className="col-lg-7 d-none d-lg-flex flex-column justify-content-center">
        
                <ul className="nav-menu-content d-flex justify-content-evenly mb-0">
                    <li><NavLink to='/home'>HOME</NavLink></li>
                    <li><NavLink to='/about'>ABOUT</NavLink></li>
                    <li><NavLink to='/tour'>TOUR PACKAGES</NavLink></li>
                    <li><NavLink to='/gallery'>GALLERY</NavLink></li>
                    <li><NavLink to='/contact'>CONTACT</NavLink></li>
          </ul>
     
        </div>
        <div className="col-3 col-sm-3 col-lg-3 nav-menu-profile d-flex align-items-center justify-content-evenly">
          <button className="btn btn-warning px-4 d-none d-lg-block">PROFILE</button>
          <button className="btn btn-warning px-4 d-none d-lg-block">LOGOUT</button>
          <button className="btn btn-warning px-4 d-lg-none" onClick={handleModel}>SS</button>
        </div>
      </div>
    </div>
    <Offcanvas show={show} onHide={handleModel} backdrop="static" className="bg-secondary-subtle" >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Wildlens Tour</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="nav-menu-content d-flex flex-column gap-4">
          <li>
            <button className="btn btn-success w-100"><NavLink to='/home'>HOME</NavLink></button>
          </li>
          <li>
            <button className="btn btn-success w-100"><NavLink to='/about'>ABOUT</NavLink></button>
          </li>
          <li>
            <button className="btn btn-success w-100"><NavLink to='/tour'>TOUR PACKAGES</NavLink></button>
          </li>
          <li>
            <button className="btn btn-success w-100"><NavLink to='/gallery'>GALLERY</NavLink></button>
          </li>
          <li>
            <button className="btn btn-success w-100"><NavLink to='/gallery'>CONTACT</NavLink></button>
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
    </>
  );
};

export default HomeNavbar;
