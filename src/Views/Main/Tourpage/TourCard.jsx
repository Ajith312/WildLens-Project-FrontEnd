import React from 'react'
import Card from 'react-bootstrap/Card'
import card from "../../../assets/card.jpg"
import { MdOutlineAccessTime } from "react-icons/md";
import { TfiLocationPin } from 'react-icons/tfi';
import { Button } from 'react-bootstrap';
import { IoMdStar } from 'react-icons/io';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';

const TourCard = () => {
  return (
    <div className='tour-card'>
        <Card className='card-box'>
        <Card.Img variant="top" src={card} className='p-3' />
        <Card.Body>
          <Card.Title className='mb-3 text-dark fs-4 fw-bold'>Westminster to Greenwich River Thames</Card.Title>
          <Card.Text>
           <div className="tour-card-content d-flex flex-column">
                <div className='d-flex align-items-center mb-3'>
                   <span><MdOutlineAccessTime size={30} className='text-primary'/></span>
                   <p className='mb-0 text-secondary fs-5 fw-bold ms-3 '>Duration 4 Days </p>
                </div>
                <div className='d-flex align-items-center mb-3'>
                   <span><TfiLocationPin size={30} className='text-primary'/></span>
                   <p className='mb-0 text-secondary fs-5 fw-bold ms-3 '>Location Kenya</p>
                </div>
                <div className='d-flex align-items-center'>
                   <span><RiMoneyRupeeCircleLine size={30} className='text-primary'/></span>
                   <p className='mb-0 text-secondary fs-5 fw-bold ms-3 '>Reviews 547 reviews </p>
                </div>
           </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className='bg-white'>
            <div className="tourcard-footer d-flex flex-column flex-sm-row justify-content-sm-between justify-content-center align-items-center p-2">
                <div className='d-flex flex-column mb-3 mb-sm-0'>
                    <div>
                    <span><IoMdStar className='text-warning' size={30}/></span>
                    <span><IoMdStar className='text-warning' size={30}/></span>
                    <span><IoMdStar className='text-warning' size={30}/></span>
                    <span><IoMdStar className='text-warning'size={30}/></span>
                    <span><IoMdStar className='text-secondary' size={30}/></span>
                    </div>
                    <p className='mb-0 text-secondary fs-5 fw-bold'>547 reviews </p>
                </div>
                <div><Button variant="success" className='py-2'><p className='mb-0 fs-5 fw-bold '>View More...</p></Button></div>
            </div>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default TourCard