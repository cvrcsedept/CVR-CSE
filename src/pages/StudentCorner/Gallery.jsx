import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css"; // Custom CSS

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Array of 25 images (Using only lowercase .jpg to prevent array issues)
  const images = Array.from(
    { length: 25 },
    (_, i) => `/images/StudentCorner/IMG-${i + 1}.png`
  );

  // Auto-scroll carousel with cleanup to prevent memory leaks
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation function
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={`student-showcase-container ${isLoaded ? "loaded" : ""}`}>
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-shape shape1"></div>
        <div className="bg-shape shape2"></div>
        <div className="bg-shape shape3"></div>
      </div>

      {/* Banner */}
      <div className="banner-container">
        <div className="banner">
          <h1 className="banner-title">Student Work Showcase</h1>
          <div className="banner-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="banner-subtitle">
            Celebrating creativity and excellence in student projects
          </p>
        </div>
      </div>

      {/* Custom Carousel */}
      <div className="carousel-container">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${
                activeSlide === index ? "active" : ""
              }`}
              style={{
                transform: `translateX(${100 * (index - activeSlide)}%)`,
                zIndex: activeSlide === index ? 10 : 1,
              }}
            >
              <div className="img-wrapper">
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

        {/* Carousel Navigation */}
        <div className="carousel-nav">
          <button
            className="carousel-control prev"
            onClick={() =>
              goToSlide((activeSlide - 1 + images.length) % images.length)
            }
            aria-label="Previous Slide"
          >
            <span>&lsaquo;</span>
          </button>

          <button
            className="carousel-control next"
            onClick={() => goToSlide((activeSlide + 1) % images.length)}
            aria-label="Next Slide"
          >
            <span>&rsaquo;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
