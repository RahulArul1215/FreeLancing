import React, { useState,useEffect } from 'react';
import '../Styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

import Tloomy from '../Assets/Tloomy.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);    
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='Navbar'>
    <div className='Navbar-container'>
      <div>
        <img src={Tloomy} alt="tloomy" className='Navbar-Logo'/>
      </div>

      <div className="Navbar-center">
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className='Navbar-button'>
        <button>Get in Touch</button>
      </div>
  
      <div className="Navbar-hamburger cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>

  {isOpen ? (
  <div className={`Navbar-mobile Navbar-mobile-open`}>
    <div className={`Navbar-mobile-text Navbar-mobile-text-show`}>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact</li>
        <li> 
          <div className='Navbar-mobile-button'>
            <button>Get in Touch</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
) : (
  <div className={`Navbar-mobile Navbar-mobile-close`}>
    <div className={`Navbar-mobile-text Navbar-mobile-text-hide`}>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Contact</li>
        <li> 
          <div className='Navbar-mobile-button'>
            <button>Get in Touch</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
)}

  </div>
  );
};

export default Navbar;
