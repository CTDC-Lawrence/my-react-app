import React from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div key={index} className="carousel-card">
          <img src={image.url} alt={image.alt} />
          <div className="carousel-card-info">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
