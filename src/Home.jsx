import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from './utils/Analytics';
import ajitprofile from './assets/ajitprofile.jpg';
import myResume from './assets/resume_Ajit_.pdf';
import './style/Home.css';

const Home = () => {

  const fullWidthStyles = {
    homeSection: {
      width: '100vw',
      maxWidth: '100%',
      overflow: 'hidden'
    },
    heroSection: {
      width: '100vw',
      maxWidth: '100%'
    },
    heroContainer: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto'
    }
  };

  const { trackPageView } = useAnalytics();
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Track page view
    trackPageView('Home');
    
    // Initialize animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      // Clean up observer
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [trackPageView]);

  return (
    <section className="home" style={fullWidthStyles.homeSection}>
      {/* Hero Section */}
      <div className="hero-section" ref={heroRef} style={fullWidthStyles.heroSection}>
        <div className="hero-container" style={fullWidthStyles.heroContainer}>
          <div className="hero-content reveal">
            <h1 className="hero-title">
              <span className="hello-text">Hello, I'm</span>
              <span className="name-text">Ajit karn</span>
            </h1>
            <h2 className="hero-subtitle">Web Developer</h2>
            <p className="hero-description">
            Passionate Front-End Developer with experience in building scalable, responsive, and user-friendly web applications. 
            Skilled in React.js, JavaScript, HTML, CSS, and API integration. Adept at collaborating with designers, product managers, and back-end developers to deliver high-quality UI/UX experiences. 
            Strong problem-solving skills with a keen eye for design and performance optimization. 
            Enthusiastic about learning new technologies and contributing to innovative projects in a fast-paced environment.
            </p>
            <div className="hero-cta">
              <Link to="/projects" className="cta-button">VIEW WORK</Link>
              <a href={myResume} download className="cta-button secondary" onClick={() => 
                useAnalytics().trackResumeDownload()
              }>
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
          <div className="hero-image reveal">
            <div className="profile-image">
              {/* Replace with your actual image */}
              <div className="profile-placeholder">
              <img 
        src={ajitprofile} // If your image is in the public folder
        alt="Ajit karn" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="featured-projects">
        <div className="section-container">
          <div className="section-header reveal">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card reveal">
              <div className="project-image" style={{ backgroundColor: '#3498db' }}>
                <span className="project-number">PROJECT 1</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">E-commerce Website</h3>
                <p className="project-tech">React, Node.js, MongoDB</p>
                <Link to="/projects" className="project-link">View Details</Link>
              </div>
            </div>
            {/*project 2 */}
            <div className="project-card reveal">
              <div className="project-image" style={{ backgroundColor: '#344fcd' }}>
                <span className="project-number">PROJECT 2</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">E-commerce Website</h3>
                <p className="project-tech">React, Node.js, MongoDB</p>
                <Link to="/projects" className="project-link">View Details</Link>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="project-card reveal">
              <div className="project-image" style={{ backgroundColor: '#2ecc71' }}>
                <span className="project-number">PROJECT 3</span>
              </div>
              <div className="project-info">
                <h3 className="project-title">Portfolio Design</h3>
                <p className="project-tech">Figma, HTML, CSS, JavaScript</p>
                <Link to="/projects" className="project-link">View Details</Link>
              </div>
            </div>
          </div>

  
          
          <div className="view-all-container reveal">
            <Link to="/projects" className="view-all-button">View All Projects</Link>
          </div>
        </div>
      </div>

      {/* Skills Preview Section */}
      <div className="skills-preview">
        <div className="section-container">
          <div className="section-header reveal">
            <h2 className="section-title">My Skills</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="skills-preview-container reveal">
            <div className="skill-item">
              <div className="skill-info">
                <h3 className="skill-name">HTML/CSS</h3>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <h3 className="skill-name">JavaScript</h3>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-info">
                <h3 className="skill-name">React</h3>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="view-all-container reveal">
            <Link to="/skills" className="view-all-button">View All Skills</Link>
          </div>
        </div>
      </div>

      {/* Call To Action Section */}
      <div className="cta-section reveal">
        <div className="cta-container">
          <h2 className="cta-title">Interested in working together?</h2>
          <p className="cta-description">Let's discuss your project and see how I can help bring your ideas to life.</p>
          <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;