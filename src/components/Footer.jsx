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
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">
                <img src="/logo.png" alt="King's Way Logo" />
                <div className="footer-logo-text">
                  <h3>King's Way</h3>
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
                <p>kingswayps@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} King's Way Kindergarten & Primary. All rights reserved.</p>
            <p>Powered By danceCode developers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
