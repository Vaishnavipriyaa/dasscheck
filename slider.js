import React, { useState } from 'react';
import './slider.css';
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';
import image6 from './6.png';
const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3; // Number of items per slide

  const items = [
    {
      
      description: "Expansion of IIIT-H",
      link: "https://example.com/news1",
      image: image1, // Example image URL
    },
    {
      
      description: "Construction of new classrooms",
      link: "https://example.com/news2",
      image: image2, // Example image URL
    },
    {
     
      description: "Taking research to new heights",
      link: "https://example.com/news3",
      image: image3, // Example image URL
    },
    {
      
      description: "Rain rain go away!",
      link: "https://example.com/news4",
      image: image4, // Example image URL
    },
    {
     
      description: "FELICITY season",
      link: "https://example.com/news5",
      image: image5, // Example image URL
    },
    {
      
      description: "R&D",
      link: "https://example.com/news6",
      image: image6, // Example image URL
    }
  ];

  const nextSlide = () => {
    const newStartIndex = startIndex + itemsPerPage;
    if (newStartIndex < items.length) {
      setStartIndex(newStartIndex);
    }
  };

  const prevSlide = () => {
    const newStartIndex = startIndex - itemsPerPage;
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
    }
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {items.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
          <div key={index} className="slider-box">
            <div className="slider-item">
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.link}>Learn more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
