import React from 'react'
import coverImage from "../../../assets/contact.jpg";
import "../Contact/Contact.css"
import GalleryImageCard from './GalleryImageCard';
import image1 from "../../../assets/gallery1.jpg";
import image2 from "../../../assets/gallery2.jpg";
import image3 from "../../../assets/gallery3.jpg";
import image4 from "../../../assets/gallery4.jpg";
import image5 from "../../../assets/gallery5.jpg";
import image6 from "../../../assets/gallery6.jpg";
import image7 from "../../../assets/gallery7.jpg";
import image8 from "../../../assets/gallery8.jpg";

const Gallery = () => {
  const images = [
    {src:image1}, {src:image2},{src:image3},{src:image4},{src:image5},{src:image6},{src:image7},{src:image8}
  ]
  return (
    <div className='d-flex flex-column'>
      <div className="coverImageContainer d-flex justify-content-center align-items-center position-relative">
        <img src={coverImage} alt="cover-image" className="coverImage"/>
        <p className="coverText">Gallery</p>
      </div>
      <div className='galleryContainer py-5 d-flex justify-content-center' >
        <div className="col-11 py-5 ">
          <div className='d-flex justify-content-center'>
           <h2 className='fw-bold mt-3 galleryText'>WildLens Tour Pictutes</h2>
          </div>
          <div className="galleryImagesContainer row mx-4 my-4">
            {
              images.map((image)=>{
                return(
                  <GalleryImageCard image={image} />
                )
              })
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default Gallery
