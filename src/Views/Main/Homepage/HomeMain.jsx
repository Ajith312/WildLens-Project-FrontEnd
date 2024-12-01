import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import "./Homepage.css"

import SliderImageOne from "../../../assets/tiger.jpg"
import sliderImageTwo from "../../../assets/deer1.jpg" // ok
import sliderImageThree from "../../../assets/wild-deer.jpg" // ok
import sliderImageFour from "../../../assets/old-elephant.jpg" // ok
import sliderImageFive from "../../../assets/red-deer.jpg"
import sliderimageSix from "../../../assets/lion.jpg" // ok


function HomeMain() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='body-main mt-0'>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item >
          <img
            className="main-image"
            src={SliderImageOne}
            alt="First slide"
            height={"100%"}
            width={"100%"}
          />
          <Carousel.Caption>
            <h1 className='slider-text'>Let's Journey and Discover People</h1>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="main-image"
            src={sliderImageTwo}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>To travel is to take a journey into yourself</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="main-image"
            src={sliderImageThree}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="main-image"
            src={sliderImageFour}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="main-image"
            src={sliderImageFive}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="main-image"
            src={sliderimageSix}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>sixth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>



      </Carousel>
    </div>
  );
}

export default HomeMain;
