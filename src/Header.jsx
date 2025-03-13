import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAnalytics } from './utils/Analytics';
import './style/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const { trackPageView } = useAnalytics();
  const location = useLocation();

  // Track page views
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname, trackPageView]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1 className="logo-text"><i>AJIT KARN</i></h1>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>PROJECTS</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link></li>
            <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>SKILLS</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link></li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>HOME</Link></li>
            <li><Link to="/projects" onClick={closeMobileMenu} className={location.pathname === '/projects' ? 'active' : ''}>PROJECTS</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link></li>
            <li><Link to="/skills" onClick={closeMobileMenu} className={location.pathname === '/skills' ? 'active' : ''}>SKILLS</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;