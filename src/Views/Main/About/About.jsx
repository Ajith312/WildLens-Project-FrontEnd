import React from "react";
import coverImage from "../../../assets/contact.jpg";
import "../Contact/Contact.css";
import womenImg from "../../../assets/womenImg.jpg"

const About = () => {
  return (
    <div className="d-flex flex-column">
      {/* cover image container*/}
      <div className="coverImageContainer d-flex justify-content-center align-items-center position-relative">
        <img src={coverImage} alt="cover-image" className="coverImage" />
        <p className="coverText">About</p>
      </div>
      {/* About container box*/}
      <div className="aboutContainer d-flex justify-content-center">
        <div className="aboutBoxContent col-10 d-flex flex-column my-5">
          <div className="aboutBox d-flex justify-content-center">

            <div className="aboutBoxText col-6 p-5">
              <h1 className="text-success mb-3">About Us</h1>
              <h2 className="fw-bold mb-3">We provide the best tour facilities</h2>
              <p className="text-wrap text-secondary mb-4">
                We are the largest holiday service provider in the world with
                partners and places spread all over the world by prioriti-zing
                service and customer satisfaction.
              </p>

              <div className="aboutBoxCardContainer">
                <div className="row d-flex justify-content-between mb-3">
                  <div className="col-5 p-2 bg-success-subtle rounded-2">
                      <h4>Safety First Always</h4>
                  </div>
                  <div className="col-5 p-2 bg-danger-subtle rounded-2">
                      <h4>Trusted Travel Guide</h4>
                  </div>
                </div>
                <div className="row d-flex justify-content-between rounded-2">
                  <div className="col-5 p-2 bg-danger-subtle">
                    <h4>Expertise And Experience</h4>
                    </div>
                  <div className="col-5 p-2 bg-success-subtle rounded-2">
                    <h4>Time And Stress Savings </h4>
                    </div>
                </div>
                
              </div>
              <button className="btn brand-color mt-4">Find out more</button>

            </div>
            <div className="aboutBoxImage col-6 bg-warning">
              <img  src={womenImg} alt="women-image" className=""/>
            </div>
          </div>
          <div className="aboutCompanyyBox d-flex mt-3">
            <div className="col-3 p-5 border-end border-secondary" >
              <h2>10K+ Happy traveller</h2>
            </div>
            <div className="col-3 p-5 border-end border-secondary">
            <h2>10K+ Happy traveller</h2>
            </div>
            <div className="col-3 p-5 border-end border-secondary">
            <h2>90%+ positive reviews</h2>
            </div>
            <div className="col-3 p-5">
            <h2>10+ Travel Guide</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
