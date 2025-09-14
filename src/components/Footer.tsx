import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact-item">
            <span className="contact-text">+123-456-7890</span>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="contact-item">
            <span className="contact-text">www.reallygreatsite.com</span>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="contact-item">
            <span className="contact-text">hello@reallygreatsite.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;