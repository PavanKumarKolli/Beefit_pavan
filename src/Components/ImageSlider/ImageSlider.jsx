// src/ImageSlider.js

import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="left-arrow">
        &#10094;
      </button>
      <div className="slider-content">
        {slides.map((slide, index) => (
          <div
            className={index === currentIndex ? "slide active" : "slide"}
            key={index}
          >
            {index === currentIndex && (
              <>
                <img src={slide.image} alt={`Slide ${index}`} />
                <div className="text">{slide.text}</div>
              </>
            )}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="right-arrow">
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
