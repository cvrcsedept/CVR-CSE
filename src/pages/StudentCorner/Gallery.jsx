import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css"; 

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const images = Array.from(
    { length: 25 },
    (_, i) => `/images/StudentCorner/IMG-${i + 1}.webp`
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={`student-showcase-container ${isLoaded ? "loaded" : ""}`}>
      <div className="animated-bg">
        <div className="bg-shape shape1"></div>
        <div className="bg-shape shape2"></div>
        <div className="bg-shape shape3"></div>
      </div>

      <div className="gallery-banner-container">
        <div className="gallery-banner">
          <h1 className="gallery-banner-title">Student Work Showcase</h1>
          <div className="gallery-banner-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="gallery-banner-subtitle">
            Celebrating creativity and excellence in student projects
          </p>
        </div>
      </div>

      <div className="gallery-carousel-container p-2">
        <div className="gallery-carousel-inner mb-3">
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-carousel-item ${
                activeSlide === index ? "active" : ""
              }`}
              style={{
                transform: `translateX(${100 * (index - activeSlide)}%)`,
                zIndex: activeSlide === index ? 10 : 1,
              }}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={img}
                  alt={`Student work ${index + 1}`}
                  className="preserve-dimensions"
                  loading="lazy" // Lazy loading for performance
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-carousel-nav mt-2">
        <button
          className="gallery-carousel-control prev"
          onClick={() =>
            goToSlide((activeSlide - 1 + images.length) % images.length)
          }
          aria-label="Previous Slide"
        >
          <span>&lsaquo;</span>
        </button>

        <button
          className="gallery-carousel-control next"
          onClick={() => goToSlide((activeSlide + 1) % images.length)}
          aria-label="Next Slide"
        >
          <span>&rsaquo;</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;