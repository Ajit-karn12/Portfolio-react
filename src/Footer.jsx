import React from 'react';
import { Link } from 'react-router-dom';
import './style/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo & About */}
          <div className="footer-about">
            <h3 className="footer-logo">PORTFOLIO</h3>
            <p className="footer-description">
              A showcase of my work, skills, and passion for creating exceptional web experiences.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Ajit-karn12/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ajit-karn-b134a1126/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a href="https://www.instagram.com/ajkarn12/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-title">Contact</h3>
            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope"></i>
                <span>ajitkarn12@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+44 7944369695</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Leicester, United kingdom</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h3 className="footer-title">Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to my newsletter for the latest updates on projects and tech insights.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input" 
                required 
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;