import React, { useState } from 'react';
import '../Styles/Hero.css';
import heroimg from '../Assets/Hero.jpg';
import logoimg from '../Assets/logo.png'; // Ensure logo.png is the correct path

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero-section" style={{ position: 'relative', height: '95vh', overflow: 'hidden' }}>
  {/* Background Video */}
  <iframe
    className="video-background"
    src="https://www.youtube.com/watch?v=BFS9n4B_2xA"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '-1',
      objectFit: 'cover',
      pointerEvents: 'none'
    }}
  ></iframe>

  {/* Logo Section */}
  <div className="logo">
    <img src={logoimg} alt="Logo" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
  </div>

  {/* Hamburger Menu */}
  <div className="hamburger" onClick={toggleMenu}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
  </div>

  {/* Menu */}
  <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</div>

  );
};

export default HeroSection;