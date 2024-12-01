import React from 'react'
import coverImage from "../../../assets/contact.jpg";
import "../Contact/Contact.css"

const Gallery = () => {
  return (
    <div className='d-flex flex-column'>
      <div className="coverImageContainer d-flex justify-content-center align-items-center position-relative">
        <img src={coverImage} alt="cover-image" className="coverImage"/>
        <p className="coverText">Gallery</p>
      </div>

    </div>
  )
}

export default Gallery
