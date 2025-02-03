import React, { useState } from "react";
import coverImage from "../../../assets/contact.jpg";
import "../Contact/Contact.css";
import TourCard from "./TourCard";

const Tour = () => {
  const [accordionVisible, setAccordionVisible] = useState(false); // Tracks visibility of the accordion
  const [activeSection, setActiveSection] = useState(""); // Tracks which section is active

  const toggleAccordionVisibility = () => {
    setAccordionVisible(!accordionVisible); // Toggle accordion visibility
    setActiveSection(""); // Reset the active section when toggling visibility
  };

  const toggleSection = (section) => {
    setActiveSection((prevSection) => (prevSection === section ? "" : section)); // Toggle the active section
  };

  return (
    <div className="d-flex flex-column">
      <div className="coverImageContainer d-flex justify-content-center align-items-center position-relative">
        <img src={coverImage} alt="cover-image" className="coverImage" />
        <p className="coverText">Tour</p>
      </div>

    
      <div className="cardContainer d-flex justify-content-center">
        <div className="col-12 col-lg-10 d-flex flex-wrap my-5">
          <div className="col-12 col-md-6 col-xl-4 p-3 tour-card-box">
            <TourCard />
          </div>
          <div className="col-12 col-md-6 col-xl-4 p-3 tour-card-box">
            <TourCard />
          </div>
          <div className="col-12 col-md-6 col-xl-4 p-3 tour-card-box">
            <TourCard />
          </div>
          <div className="col-12 col-md-6 col-xl-4 p-3 tour-card-box">
            <TourCard />
          </div>
          <div className="col-12 col-md-6 col-xl-4 p-3 tour-card-box">
            <TourCard />
          </div>
          <div className="col-12 col-md-6 col-xl-4 p-3 tour-card-box">
            <TourCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
