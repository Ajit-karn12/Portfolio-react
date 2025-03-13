import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from './utils/analytics';
import './style/Skills.css';

const Skills = () => {
  const { trackPageView } = useAnalytics();
  
  // Skills data
  const technicalSkills = [
    { name: "HTML/CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Node.js", percentage: 70 },
    { name: "Responsive Design", percentage: 90 },
    { name: "Git & Version Control", percentage: 85 },
    { name: "RESTful APIs", percentage: 75 }
  ];
  
  const softSkills = [
    { name: "Problem Solving", percentage: 90 },
    { name: "Communication", percentage: 85 },
    { name: "Teamwork", percentage: 90 },
    { name: "Time Management", percentage: 80 },
    { name: "Adaptability", percentage: 85 },
    { name: "Attention to Detail", percentage: 90 }
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: "💻",
      description: "Custom website development using modern technologies and frameworks to create responsive, user-friendly websites."
    },
    {
      "title": "CMMI Consultant",
      "icon": "📊",
      "description": "As a CMMI Associate in Development, Services, and Management, I’ve successfully completed 30+ appraisals, including Level 3 and Level 5 high maturity assessments. I help organizations improve their processes, optimize workflows, and drive continuous improvement, ensuring higher levels of quality and project management effectiveness."
    },
    {
      title: "E-commerce Solutions",
      icon: "🛒",
      description: "Building online stores with secure payment processing, inventory management, and a seamless shopping experience."
    },
    {
      title: "Web Application Development",
      icon: "⚙️",
      description: "Developing custom web applications with complex functionality tailored to your business needs."
    }
  ];

  useEffect(() => {
    // Track page view
    trackPageView('Skills');

    // Initialize animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Animate skill bars when they come into view
          if (entry.target.classList.contains('skill-bar')) {
            entry.target.classList.add('animate');
          }
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal, .skill-bar').forEach(item => {
      observer.observe(item);
    });

    return () => {
      // Clean up observer
      document.querySelectorAll('.reveal, .skill-bar').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [trackPageView]);

  return (
    <section className="skills-page">
      <div className="skills-header">
        <div className="section-container">
          <h1 className="page-title reveal">My Skills & Services</h1>
          <p className="page-description reveal">
            I offer a range of skills and services to help bring your digital projects to life. From front-end development, I'm committed to delivering high-quality solutions.
          </p>
        </div>
      </div>

      <div className="skills-content">
        <div className="section-container">
          {/* Technical Skills Section */}
          <div className="skills-section reveal">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-bar-fill" 
                      style={{ "--percent": `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="skills-section reveal">
            <h2 className="section-title">Soft Skills</h2>
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-bar-fill" 
                      style={{ "--percent": `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="services-section reveal">
            <h2 className="section-title">Services I Offer</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="tools-section reveal">
            <h2 className="section-title">Tools & Technologies</h2>
            <div className="tools-grid">
              <div className="tool-category">
                <h3 className="tool-category-title">Front-end</h3>
                <div className="tools-list">
                  <span className="tool-tag">HTML5</span>
                  <span className="tool-tag">CSS3</span>
                  <span className="tool-tag">JavaScript</span>
                  <span className="tool-tag">React</span>
                  <span className="tool-tag">Redux</span>
                  <span className="tool-tag">Sass</span>
                  <span className="tool-tag">Bootstrap</span>
                  <span className="tool-tag">Tailwind CSS</span>
                </div>
              </div>

              <div className="tool-category">
                <h3 className="tool-category-title">Back-end</h3>
                <div className="tools-list">
                  <span className="tool-tag">Node.js</span>
                  <span className="tool-tag">Express</span>
                  <span className="tool-tag">MongoDB</span>
                  <span className="tool-tag">Firebase</span>
                  <span className="tool-tag">REST APIs</span>
                </div>
              </div>

              <div className="tool-category">
                <h3 className="tool-category-title">Design</h3>
                <div className="tools-list">
                  <span className="tool-tag">Figma</span>
                  <span className="tool-tag">Adobe XD</span>
                  <span className="tool-tag">Photoshop</span>
                  <span className="tool-tag">Illustrator</span>
                </div>
              </div>

              <div className="tool-category">
                <h3 className="tool-category-title">Other</h3>
                <div className="tools-list">
                  <span className="tool-tag">Git</span>
                  <span className="tool-tag">GitHub</span>
                  <span className="tool-tag">Webpack</span>
                  <span className="tool-tag">VS Code</span>
                  <span className="tool-tag">Responsive Design</span>
                  <span className="tool-tag">SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="skills-cta reveal">
        <div className="section-container">
          <h2 className="cta-title">Ready to start your project?</h2>
          <p className="cta-description">
            Let's work together to create something amazing.
          </p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;