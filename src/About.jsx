import React from 'react';
import { Link } from 'react-router-dom';
import './style/About.css';

function About() {
  return (
      <section className="about-page">
        {/* Header Section */}
        <div className="about-header">
          <div className="section-container">
            <h1 className="page-title reveal">About Me</h1>
            <p className="page-description reveal">
              Learn more about my journey, skills, and what drives me as a web developer and designer.
            </p>
          </div>
        </div>
  
        <div className="about-content">
          <div className="section-container">
            <div className="about-grid">
              {/* Profile Section */}
              <div className="about-profile reveal">
                <div className="profile-image">
                  {/* Replace with your actual image */}
                  <div className="profile-placeholder">
                    <span>YOUR PHOTO</span>
                  </div>
                </div>
                <div className="profile-info">
                  <h2 className="profile-name">Your Name</h2>
                  <p className="profile-title">Web Developer & Designer</p>
                  <div className="profile-social">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                  <a href="/resume.pdf" download className="resume-button">
                    Download Resume
                  </a>
                </div>
              </div>
  
              {/* Bio Section */}
              <div className="about-bio reveal">
                <h2 className="section-title">My Journey</h2>
                <div className="bio-content">
                  <p>
                    Hello! I'm a passionate web developer with over 3 years of experience creating 
                    modern, responsive websites and applications. My journey in web development 
                    began when I discovered my passion for creating engaging digital experiences.
                  </p>
                  <p>
                    I specialize in front-end development using technologies like React, but I'm also 
                    comfortable working with back-end technologies. I believe in writing clean, 
                    maintainable code that provides a seamless user experience.
                  </p>
                  <p>
                    Outside of coding, I enjoy staying updated with the latest design trends and 
                    technologies. I'm constantly learning and expanding my skillset to deliver the 
                    best possible solutions for my clients.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Experience Timeline */}
            <div className="experience-section reveal">
              <h2 className="section-title">Experience</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2022 - Present</div>
                  <div className="timeline-content">
                    <h3>Senior Front-end Developer</h3>
                    <p className="timeline-company">TechCorp Inc.</p>
                    <p className="timeline-description">
                      Lead front-end development for various client projects, implementing modern 
                      web technologies and best practices. Collaborated with design and back-end 
                      teams to deliver high-quality websites and applications.
                    </p>
                  </div>
                </div>
  
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2020 - 2022</div>
                  <div className="timeline-content">
                    <h3>Web Developer</h3>
                    <p className="timeline-company">Digital Solutions LLC</p>
                    <p className="timeline-description">
                      Developed responsive websites and e-commerce platforms for clients. 
                      Worked with a team of designers and developers to create intuitive 
                      and visually appealing digital experiences.
                    </p>
                  </div>
                </div>
  
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2019 - 2020</div>
                  <div className="timeline-content">
                    <h3>Junior Web Developer</h3>
                    <p className="timeline-company">WebStart Studio</p>
                    <p className="timeline-description">
                      Assisted in the development of websites and web applications. Gained 
                      hands-on experience with HTML, CSS, JavaScript, and modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Education Section */}
            <div className="education-section reveal">
              <h2 className="section-title">Education</h2>
              <div className="education-grid">
                <div className="education-item">
                  <div className="education-year">2018</div>
                  <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
                  <p className="education-school">University of Technology</p>
                </div>
  
                <div className="education-item">
                  <div className="education-year">2020</div>
                  <h3 className="education-degree">Advanced Web Development Certification</h3>
                  <p className="education-school">Online Tech Academy</p>
                </div>
  
                <div className="education-item">
                  <div className="education-year">2021</div>
                  <h3 className="education-degree">UI/UX Design Specialization</h3>
                  <p className="education-school">Design Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Call to action */}
        <div className="about-cta reveal">
          <div className="section-container">
            <h2 className="cta-title">Let's Work Together</h2>
            <p className="cta-description">
              I'm currently available for freelance work and interesting projects.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button">Get in Touch</Link>
              <Link to="/projects" className="cta-button secondary">View My Work</Link>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;