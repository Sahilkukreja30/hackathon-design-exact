import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="rocket-icon">🚀</span>
          <span className="team-name">Stellar Transformation</span>
        </div>
        
        <nav className="navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Services</a>
        </nav>
        
        <button className="contact-btn">Contact</button>
      </div>
    </header>
  );
};

export default Header;