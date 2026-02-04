import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,40 Q300,70 600,40 T1200,40 L1200,0 L0,0 Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <img src="/logo.png" alt="Kings' Way Logo" />
                <div className="footer-logo-text">
                  <h3>Kings' Way</h3>
                  <p className="footer-tagline">Kindergarten & Primary</p>
                </div>
              </div>
              <p className="footer-motto">"In God We Trust"</p>
              <p className="footer-description">
                Building Pure Leaders with Faith, Grace & Excellence
              </p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/programs">Programs</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/gallery">Photo Gallery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/apply">Admissions</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Info</h4>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>Kalongo Town Council, Uganda</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p>Director: +256 772 511 720</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p>Hd-teacher: +256 772 157 140</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <p><a href="mailto:kingswayps@gmail.com" className='gmail'>kingswayps@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Kings' Way Kindergarten & Primary. All rights reserved.</p>
            <p>Powered By danceCode developers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
