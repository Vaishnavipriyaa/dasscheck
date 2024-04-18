import React, { useState } from 'react';
import './slide.css';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const events = [
    {
      id: 1,
      title: "Tech Summit 2024",
      description: "Join us for the annual Tech Summit where industry leaders discuss the latest trends and innovations.",
      link: "https://techsummit.com",
    },
    {
      id: 2,
      title: "Web Development Workshop",
      description: "Learn the fundamentals of web development in this hands-on workshop. No prior experience required!",
      link: "https://webdevworkshop.com",
    },
    {
      id: 3,
      title: "Data Science Conference",
      description: "Explore the world of data science with talks and workshops from leading experts in the field.",
      link: "https://datascienceconference.com",
    },
  ];

  const plusSlides = (n) => {
    const newIndex = slideIndex + n;
    if (newIndex >= 0 && newIndex < events.length) {
      setSlideIndex(newIndex);
    }
  };

  const currentSlide = (index) => {
    if (index >= 0 && index < events.length) {
      setSlideIndex(index);
    }
  };

  return (
    <div className="slideshow-container">
      {/* Full-width slides/quotes */}
      {events.map((event, index) => (
        <div key={index} className="mySlides" style={{ display: slideIndex === index ? 'block' : 'none' }}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <a href={event.link}>Learn more</a>
        </div>
      ))}

      {/* Next/prev buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

      {/* Dots/bullets/indicators */}
      <div className="dot-container">
        {events.map((_, index) => (
          <span key={index} className={`dot ${slideIndex === index && 'active'}`} onClick={() => currentSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
