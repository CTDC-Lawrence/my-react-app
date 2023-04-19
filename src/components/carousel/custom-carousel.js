import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import './custom-carousel.css';

const CustomCarousel = ({ images, titles }) => {
  return (
    <Carousel showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <Link to={`/${titles[index].replace(/\s+/g, '')}`}>
            <img className="custom-carousel-img resized-image" src={image} alt={titles[index]} />
            <p className="legend" style={{ fontWeight: 'bold' }}>{titles[index]}</p>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export { CustomCarousel };

