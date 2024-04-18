import React from 'react';
import './NewsPage.css'; // Import CSS file for styling
import image1 from './1.png';
import image2 from './2.png';
import image3 from './3.png';
import image4 from './4.png';
import image5 from './5.png';
import image6 from './6.png';

function NewsPage() {
  // Array of news items
  const newsItems = [
    {
      title: "Expansion of IIIT-H",
      content: "IIIT Hyderabad announces the expansion of its campus to accommodate more students. The expansion plan includes the construction of new buildings, research facilities, and recreational areas.",
      link: "https://example.com/news1",
      image: image1
    },
    {
      title: "Construction of new classrooms",
      content: "As part of its development initiative, IIIT Hyderabad begins the construction of new classrooms to cater to the increasing student population. The new classrooms will be equipped with modern amenities to enhance the learning experience.",
      link: "https://example.com/news2",
      image: image2
    },
    {
      title: "Taking research to new heights",
      content: "IIIT Hyderabad's research efforts reach new heights with groundbreaking discoveries and collaborations. The institute continues to push the boundaries of knowledge in various fields, contributing to advancements in science and technology.",
      link: "https://example.com/news3",
      image: image3
    },
    {
      title: "Rain rain go away!",
      content: "Heavy rainfall disrupts normal life in Hyderabad as the city experiences flooding in several areas. Authorities are on high alert, and relief efforts are underway to assist affected residents and minimize the damage caused by the rain.",
      link: "https://example.com/news4",
      image: image4
    },
    {
      title: "FELICITY season",
      content: "IIIT Hyderabad's annual cultural fest, FELICITY, is back with a bang! Students gear up for a week-long extravaganza filled with competitions, workshops, performances, and much more. Get ready to unleash your creativity and celebrate the spirit of FELICITY!",
      link: "https://example.com/news5",
      image: image5
    },
    {
      title: "R&D",
      content: "IIIT Hyderabad's Research and Development (R&D) department continues to drive innovation and excellence. With a focus on cutting-edge technologies and interdisciplinary collaboration, the institute aims to address global challenges and make a positive impact on society.",
      link: "https://example.com/news6",
      image: image6
    }
  ];

  return (
    <div className="news-container1">
      {newsItems.map((item, index) => (
        <div className="news-news1" key={index}>
          <img src={item.image} alt="News Image" />
          <div className="news-news-content1">
            <h2>{item.title}</h2>
            <p>{item.content} Read more <a href={item.link} target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsPage;