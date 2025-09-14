import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">MYSTERIES OF THE UNIVERSE</h1>
          
          <div className="hero-subtitle">
            <span className="rocket-emoji">🚀</span>
            <span>Exoplanet Detector with AI</span>
          </div>
          
          <div className="hero-description">
            <p>Using NASA data and AI to discover planets beyond our solar system.</p>
            <p>Detecting new worlds faster and helping astronomers reduce false positives.</p>
          </div>
          
          <button className="try-now-btn">Try Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;