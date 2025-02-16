import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import { useState } from 'react';

const images = [
  { id: 0, src: "/images/home-1-plain.webp", alt: "First slide" },
  { id: 1, src: "/images/home-2-plain.webp", alt: "Second slide" },
  { id: 2, src: "/images/home-3-plain.webp", alt: "Third slide" },
];

export default function HeroCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }


  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item interval={5000}>
          <CarouselImage text={images[0].src} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage text={images[1].src} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage text={images[2].src} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="custom-indicators">
          {images.map((image, i) => {
            let size = "small";

            if (i === index) {
              size = "large";
            } else if ((index === 0 && i === images.length - 1) || (index === images.length - 1 && i === 0)) {
              size = "small";
            } else {
              size = "medium";
            }

            return (
              <span
                key={i}
                className={`dot ${size}`}
                onClick={() => setIndex(i)}
              ></span>
            );
          })}
        </div>
    </div>
  )
}
