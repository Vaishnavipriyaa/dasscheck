import React, { useState, useEffect } from 'react';
import './parallax.css'; // Make sure to import your CSS file
import App from './App';
import Slide from './slide';
import Slider from './slider';
import Navbar from './Navbar2';
import { useNavigate } from 'react-router-dom';
const ParallaxScroll = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    typeWriter();
  }, []); 

  function typeWriter() {
    const textElement = document.querySelector('.typing-animation')
    const text = textElement.textContent;
    textElement.textContent = '';

    let i = 0;
    const speed = 150;

    function type() {
      if (i < text.length) {
        const currentChar = text.charAt(i);

        textElement.insertAdjacentHTML('beforeend', currentChar);

        i++;
        setTimeout(type, speed);
      }
    }

    setTimeout(type, 0);
  }

  const CutoutTextEffect = () => {
    return (
      <div className="image-container">
        <div className="text">
          <div className="fade-in-left">Welcome to</div>
          <div className="typing-animation">IT Services Portal</div>
        </div>
      </div>
    );
  };
  
  const UpcomingEvents = () => {
    return (
      <ul id="id01" style={{ listStyleType: 'none' }}>
        <li>How do I reset my password?</li>
        <li>How do I access remote resources or VPN?</li>
        <li>What are the system requirements for using the portal?</li>
        <li>What IT services are offered by the portal?</li>
        <li>How do I update my contact information?</li>
      </ul>
    );
  };
  

  return (
    
    <div>
    {/* Add the Navbar component here */}
    <Navbar />
      
    <div>
      <div className="parallax">
      
        <CutoutTextEffect />
      </div>

      <div className="red-section">
      <b style={{fontSize:"25px"}}>People have been the foundation of Institute's success</b>
      <p></p>
      <p style={{fontSize:"15px"}}>
At IIIT-H, we provide a diverse, inclusive, fair and transparent work environment facilitating all stakeholders to grow and flourish. We realize that each individual is distinct and unique. Every effort is made in recognizing and respecting individual differences, ensuring that Institute derives maximum benefit through diverse ideas and expertise. Our focus has been to recruit and retain the best and provide an ambience for them to excel.
</p>
<b style={{fontSize:"25px"}}>Key Focus</b>
<p style={{ fontSize: "15px" }}>
    The mission and goals of the institute are greatly influenced by the desire to use IT to benefit society at large. Our mission is to contribute to the transformation of industry and the community by delivering research-led education, promoting innovation and fostering human values. Our primary goals are:
    <ul>
        <li>Impart education that is comparable in breadth and depth to the best in the world; which at the same time nurtures among students, an aptitude for research and development, starting right with the undergraduate level.</li>
        <li>Target solutions for societally-relevant problems that can be transferred to scalable technologies and enterprises.</li>
    </ul>
    What has allowed this fusion of academics and research is the presence of exceptional faculty at IIIT-H. We have been successful in attracting some of the brightest and most dedicated faculty from all over the globe.
</p>


      </div>

      <div className="news-container">
      <div className="news-content">
        <h2 style={{ textAlign: 'center' }}>News</h2>
        <div className="view-all-link" onClick={()=>navigate(`/view-all-news`)}>View All</div>
        {/* <Slide/> */}
        <Slider/>
      </div>
    </div>


      <div className="calendar-container" >
        <div className="centered-text">
          <h2>Calendar</h2>
          <App />
        </div>
        <div className="upcoming-events" >
          <h2 style={{ textAlign: 'center' }}>Upcoming Events</h2>
          <Slide/>
        </div>
      </div>

      <div className="FAQ-container">
        <h2 style={{ textAlign: 'center' }}>FAQ</h2>
        <UpcomingEvents />
      </div>
    </div>
    </div>
  );
};

export default ParallaxScroll;
