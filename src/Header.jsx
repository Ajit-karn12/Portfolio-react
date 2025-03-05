import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './style/Header.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState()

  useEffect(() => {
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  },[]);

  const toggleMobileMenuOpen = () =>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () =>{
    setIsMobileMenuOpen(false);
  };

  return (
   <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}> 
    <div className='header-container'>
      <div className='logo'>
        <h1 className='logo-text'>PortFolio</h1>
      </div>
    

    {/* mobile menu*/}
    <div className='mobile-menu-button' onClick={toggleMobileMenuOpen}>
      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    {/*for desktop navigation */}
    <nav className='desktop-nav'>
      <ul>
      <li><Link to='/' className={location.pathname ==='/' ? 'active': ''}>HOME</Link></li>
      <li><Link to='/projects' className={location.pathname ==='/projects' ? 'active': ''}>PROJECTS</Link></li>
      <li><Link to='/about' className={location.pathname ==='/about' ? 'active': ''}>ABOUT</Link></li>
      <li><Link to='/skills' className={location.pathname ==='/skills' ? 'active': ''}>SKILLS</Link></li>
      <li><Link to='/contact' className={location.pathname ==='/contact' ? 'active': ''}>CONTACT</Link></li>
      </ul>
     
    </nav>

    {/* mobile navigation*/}
    <nav className={`mobile-nav ${isMobileMenuOpen ? 'opne' : ''}`}>
      <ul>
      <li ><Link to='/' onClick={closeMobileMenu} className={location.pathname ==='/' ? 'active': ''}>HOME</Link></li>
      <li ><Link to='/projects' onClick={closeMobileMenu} className={location.pathname ==='/projects' ? 'active': ''}>PROJECTS</Link></li>
      <li ><Link to='/about' onClick={closeMobileMenu} className={location.pathname ==='/about' ? 'active': ''}>ABOUT</Link></li>
      <li ><Link to='/skills' onClick={closeMobileMenu} className={location.pathname ==='/skills' ? 'active': ''}>SKILLS</Link></li>
      <li ><Link to='/contact' onClick={closeMobileMenu} className={location.pathname ==='/contact' ? 'active': ''}>CONTACT</Link></li>
      </ul>
      
    </nav>
    </div>
   </header>
  );
}

export default Header