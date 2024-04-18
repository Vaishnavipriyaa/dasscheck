import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar2.css';
import Logo from '/home/duggaraju/my-app/src/logo.png';

async function fetchPageData(index) {
    try {
      const response = await fetch(`/api/pages/${index.index}`, { // Use template literals to include the index in the URL
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch page data');
      }
      const pageData = await response.json();
      // console.log(pageData);
      return pageData; // Return the fetched page data
    } catch (error) {
      console.error('Error fetching data:', error);
      return null; // Return null or a sensible default in case of error
    }
}

const SubPages = ({kontent}) => {
  const [dropdownStates, setDropdownStates] = useState({});
  const [subPages, setsubPages] = useState({}); // Start with null or an empty array
  async function toggleDropdown(page,yindex) {
    setDropdownStates(prevState => ({
        ...prevState,
        [yindex]: !prevState[yindex]
    }));
    setsubPages({
        ...subPages,
        [page.index]: await fetchPageData({ index: page.index }),
    });
  }
  console.log(kontent);
  if(Array.isArray(kontent)){
    return(
      <div className='sub-nav'>
        {kontent.map(konts => (
          <div className={`sub-nav-links ${dropdownStates[konts.index] ? 'dropdown-open' : ''}`} key={konts.index}>
            <div className='sub-nav-name'>
            {konts.subidS.length !== 0 ? (
                <>
                  <span>{konts.title}</span>
                  <div
                    className="dropdown-icon"
                    onClick={() => toggleDropdown(konts,konts.index)}
                  >
                    &#9662;
                  </div>
                </>
              ) : (
                <span>{konts.title}</span>
              )}</div>
              {dropdownStates[konts.index] && subPages[konts.index] ? (
              <SubPages 
              kontent ={subPages[konts.index]}/>
              ) : (<></>)}
          </div>
        ))}
      </div>
    )
  }
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageTitles, setPageTitles] = useState([]);
  const [dropdownStates, setDropdownStates] = useState({});
  const [subPages, setsubPages] = useState({}); // Start with null or an empty array

  useEffect(() => {
    fetch('/api/main-pages')
    .then(response => response.json())
    .then(data => setPageTitles(data))
    .catch(error => console.error('Error fetching page titles:', error));
    }, []);

  async function toggleDropdown(page,yindex) {
        setDropdownStates(prevState => ({
            ...prevState,
            [yindex]: !prevState[yindex]
        }));
        setsubPages({
            ...subPages,
            [page.index]: await fetchPageData({ index: page.index }),
        });
    }

    const toggleSidebar = () => {
      console.log("Hi")
      setIsOpen(!isOpen);
    };
  
  return (
    <>
    <div className='navbar'>
      <div className='left-section'>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div className='menu-name-literally'>
          IT Services
        </div>
      </div>
      <div className='right-section'>
        <div className='logo-div'>
          <img className='logo' src={Logo} alt="Logo"></img>
        </div>
      </div>
    </div>
    {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    <nav className={`side-bar ${isOpen ? 'open' : ''}`}>
      {isOpen && (<div className='hamburger-name'>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div className='menu-name-literally'>
          IT Services
        </div>
      </div>)}
      <div className="nav-links">
        {pageTitles.map(page => (
          <div className={`nav-item ${dropdownStates[page.index] ? 'dropdown-open' : ''}`} key={page.index}>
            <div className='nav-name'>
            {page.subidS.length !== 0 ? (
              <>
                <span>{page.title}</span>
                <div
                  className="dropdown-icon"
                  onClick={() => toggleDropdown(page,page.index)}
                >
                  &#9662;
                </div>
              </>
            ) : (
              <span>{page.title}</span>
            )}</div>
            {dropdownStates[page.index] && subPages[page.index] ? (
            <SubPages 
            kontent = {subPages[page.index]}/>
            ) : (<></>)}
          </div>
        ))}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
