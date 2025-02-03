import React from "react";
import coverImage from "../../../assets/contact.jpg";
import "../Contact/Contact.css";
import womenImg from "../../../assets/womenImg.jpg"
import { FaFirstAid } from "react-icons/fa";
import world from "../../../assets/world.png"
import price from "../../../assets/price.png"
import booking from "../../../assets/booking.png"
import guide from "../../../assets/guide.png"
import support from "../../../assets/support.png"
import ultimate from "../../../assets/ultimate.png"
import { Image } from "react-bootstrap";
import guide1 from "../../../assets/guide.jpg"
import guide2 from "../../../assets/GuideDani.jpg"
import guide3 from "../../../assets/GuideJoseph.jpg"

const About = () => {
  return (
    <div className="container-fluid d-flex flex-column">
      {/* cover image container*/}
      <div className="coverImageContainer d-flex justify-content-center align-items-center position-relative">
        <img src={coverImage} alt="cover-image" className="coverImage" />
        <p className="coverText">About</p>
      </div>
      {/* About container box*/}
      <div className="aboutContainer d-flex justify-content-center">
        <div className="aboutBoxContent col-10 d-flex flex-column my-5 ">
          <div className="aboutBox d-flex flex-column flex-xl-row justify-content-center">
            <div className="aboutBoxText col-12 col-xl-6 p-5">
              <h1 className="text-success mb-3">About Us</h1>
              <h2 className="fw-bold mb-3">We provide the best tour facilities</h2>
              <p className="text-wrap text-secondary mb-4">
                We are the largest holiday service provider in the world with
                partners and places spread all over the world by prioriti-zing
                service and customer satisfaction.
              </p>

              <div className="aboutBoxCardContainer">
                <div className="row d-flex flex-column flex-lg-row justify-content-evenly mb-5">
                  <div className="col-12 col-lg-5 p-2 d-flex align-items-center bg-success-subtle rounded-2">
                      <span className="p-2 col-2"><FaFirstAid size={30}/></span>
                      <h4 className="mb-0 ms-4 p-2 col-6">Safety First Always</h4>
                  </div>
                  <div className="col-12 col-lg-5 p-2 d-flex align-items-center bg-danger-subtle rounded-2">
                      <span className="p-2 col-2"><FaFirstAid size={30}/></span>
                      <h4 className="mb-0 ms-4 p-2 col-6">Trusted Travel Guide</h4>
                  </div>
                </div>
                <div className="row d-flex justify-content-evenly rounded-2">
                <div className="col-12 col-lg-5  p-2 d-flex align-items-center bg-danger-subtle rounded-2">
                      <span className="p-2 col-2"><FaFirstAid size={30}/></span>
                      <h4 className="mb-0 ms-4 p-2 col-6">Expertise And Experience</h4>
                  </div>

                  <div className="col-12 col-lg-5  p-2 d-flex align-items-center bg-success-subtle rounded-2">
                      <span className="p-2 col-2"><FaFirstAid size={30}/></span>
                      <h4 className="mb-0 ms-4 p-2 col-6">Time And Stress Savings</h4>
                  </div>
                </div>
                
              </div>
              <button className="btn brand-color mt-4 p-3">Find out more</button>

            </div>
            <div className="aboutBoxImage col-12 col-xl-6">
              <img  src={womenImg} alt="women-image" className=""/>
            </div>
          </div>
          <hr />
          <div className="aboutCompanyyBox d-flex flex-column flex-md-row my-3">
            <div className="col-12 col-md-3 p-5 border-end border-secondary" >
              <h2 className="text-center">10K+ Happy traveller</h2>
            </div>
            <div className="col-12 col-md-3 p-5 border-end border-secondary">
            <h2 className="text-center">10K+ Happy traveller</h2>
            </div>
            <div className="col-12 col-md-3 p-5 border-end border-secondary">
            <h2 className="text-center">90%+ positive reviews</h2>
            </div>
            <div className="col-12 col-md-3 p-5">
            <h2 className="text-center">10+ Travel Guide</h2>
            </div>
          </div>
          <hr />
        </div>
      </div>
      {/* whoo we are box container */}
      {/* <div className="aboutWhyBestContainer d-flex flex-column align-items-center">
      <div className="aboutWhyBestText col-10 d-flex flex-column justify-content-evenly mt-5">
        
          <div className="w-100">
                <p className="mb-0 text-center text-success fs-4">--- who we are ---</p>
                <h2 className="mb-0 text-center">Why WildLens Is Best</h2>
          </div>
          <div className="p-3 py-5">
          <div className="w-100 d-flex flex-wrap gap-3 justify-content-evenly">
            <div className="card d-flex flex-row justify-content-between">
              <div className="col-3 d-flex justify-content-center">
                <img  src={world} alt=""/>
              </div>
              <div className="col-8">
                    <h3>Worldwide coverage</h3>
                    <p>Explore breathtaking wildlife destinations across the globe. From dense jungles to vast savannahs, WildLens takes you there.</p>
              </div>
            </div>

            <div className="card d-flex flex-row col-3 p-3 justify-content-between ">
              <div className="col-3 d-flex justify-content-center">
                <img  src={price} alt=""/>
              </div>
              <div className="col-8">
                    <h3>Competetive Pricing</h3>
                    <p>hghghghghg hghghghg hghghghg lkkkklk lfkfkfkf lfkfkflfk lfkfkf lffk</p>
              </div>
            </div>
            <div className="card d-flex flex-row col-3 p-3 justify-content-between">
              <div className="col-3 d-flex justify-content-center">
                <img  src={booking} alt=""/>
              </div>
              <div className="col-8">
                    <h3>Fast Booking</h3>
                    <p>hghghghghg hghghghg hghghghg lkkkklk lfkfkfkf lfkfkflfk lfkfkf lffk</p>
              </div>
            </div>
            <div className="card d-flex flex-row col-3 p-3 justify-content-between">
              <div className="col-3 d-flex justify-content-center">
                <img  src={guide} alt=""/>
              </div>
              <div className="col-8">
                    <h3>Guided Tours</h3>
                    <p>hghghghghg hghghghg hghghghg lkkkklk lfkfkfkf lfkfkflfk lfkfkf lffk</p>
              </div>
            </div>
            <div className="card d-flex flex-row col-3 p-3 justify-content-between">
              <div className="col-3 d-flex justify-content-center">
                <img  src={support} alt=""/>
              </div>
              <div className="col-8">
                    <h3>Best Support 24/7</h3>
                    <p>hghghghghg hghghghg hghghghg lkkkklk lfkfkfkf lfkfkflfk lfkfkf lffk</p>
              </div>
            </div>
            <div className="card d-flex flex-row col-3 p-3 justify-content-between">
              <div className="col-3 d-flex justify-content-center">
                <img  src={ultimate} alt=""/>
              </div>
              <div className="col-8">
                    <h3>Ultimate Flexibility</h3>
                    <p>hghghghghg hghghghg hghghghg lkkkklk lfkfkfkf lfkfkflfk lfkfkf lffk</p>
              </div>
            </div>
            
            </div>
          </div>
      </div>  
      </div> */}
      {/* Travel Guide container*/}
     <div className="row travelGuideContainer d-flex justify-content-center">
        <div className="col-10 d-flex flex-column h-100 my-5">
           <div className="w-100">
              <p className="mb-0 text-center text-success fs-4">--- Tours Guide ---</p>
              <h2 className="mb-0 text-center">Our Travel Guide</h2>
           </div>
           <div className="travelGuideCardContainer w-100 row my-5">
                <div className="travelGuideCard  col-12 col-md-6 col-xl-3 rounded-3">
                      <div className="card  h-100 w-100">
                          <div className="travelGuideImg h-75 d-flex justify-content-center align-items-center bg-success-subtle">
                            <img src={guide1} className="h-100 w-100"/>
                          </div>
                          <div className="h-25 d-flex flex-column justify-content-center align-items-center">
                            <h3>Mateo Daniel</h3>
                            <h5 className="text-secondary">Travel Guide</h5>
                          </div>
                      </div>
                </div>
                <div className="travelGuideCard   col-12 col-md-6 col-xl-3 rounded-3">
                      <div className="card h-100 w-100">
                          <div className="travelGuideImg h-75 d-flex justify-content-center align-items-center bg-success-subtle">
                          <img src={guide2} className="h-100 w-100"/>
                          </div>
                          <div className="h-25 d-flex flex-column justify-content-center align-items-center">
                            <h3>Elias Joseph</h3>
                            <h5 className="text-secondary">Travel Guide</h5>
                            </div>
                      </div>
                </div>
                <div className="travelGuideCard   col-12 col-md-6 col-xl-3 rounded-3">
                      <div className="card  h-100 w-100">
                          <div className="travelGuideImg h-75 d-flex justify-content-center align-items-center bg-success-subtle">
                          <img src={guide3} className="h-100 w-100"/>
                          </div>
                          <div className="h-25 d-flex flex-column justify-content-center align-items-center">
                            <h3>Milex Jackson</h3>
                            <h5 className="text-secondary">Travel Guide</h5>
                            </div>
                      </div>
                </div>
                <div className="travelGuideCard  col-12 col-md-6 col-xl-3 rounded-3">
                      <div className="card h-100 w-100">
                          <div className="travelGuideImg h-75 d-flex justify-content-center align-items-center bg-success-subtle">
                          <img src={guide1} className="h-100 w-100"/>
                          </div>
                          <div className="h-25 d-flex flex-column justify-content-center align-items-center">
                            <h3>Silax Nicholas</h3>
                            <h5 className="text-secondary">Travel Guide</h5>
                            </div>
                      </div>
                </div>
               
               
           </div>
        </div>
     </div>
    </div>
  );
};

export default About;
