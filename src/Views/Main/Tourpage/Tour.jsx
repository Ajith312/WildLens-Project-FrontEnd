import React from 'react'
import coverImage from "../../../assets/contact.jpg";
import "../Contact/Contact.css"

const Tour = () => {
  return (
    <div className='d-flex flex-column'>
    <div className="coverImageContainer d-flex justify-content-center align-items-center position-relative">
      <img src={coverImage} alt="cover-image" className="coverImage"/>
      <p className="coverText">Tour</p>
    </div>

  </div>
    
  )
}

export default Tour
