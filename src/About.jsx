import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from './utils/Analytics';
import ajitprofile from './assets/ajitprofile.jpg';
import './style/About.css';

const About = () => {
  const { trackPageView, trackResumeDownload } = useAnalytics();

  useEffect(() => {
    // Track page view
    trackPageView('About');

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
      document.querySelectorAll('.reveal').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [trackPageView]);

  return (
    <section className="about-page">
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
                 <img
                  src={ajitprofile} // If your image is in the public folder
                          alt="Ajit karn" 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                </div>
              </div>
              <div className="profile-info">
                <h2 className="profile-name">Ajit Karn</h2>
                <p className="profile-title">Web Developer</p>
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
                <a 
                  href="/resume.pdf" 
                  download 
                  className="resume-button"
                  onClick={trackResumeDownload}
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Bio Section */}
            <div className="about-bio reveal">
              <h2 className="section-title">My Journey</h2>
              <div className="bio-content">
              <p>
  Hello! I'm a dedicated Front-End Developer with experience in building scalable, 
  responsive, and user-friendly web applications. My expertise lies in modern 
  technologies like React.js and TypeScript, ensuring seamless and high-performance 
  digital experiences.
</p>
<p>
  I specialize in crafting intuitive UI components and integrating them with 
  RESTful APIs using state management tools like Redux. My approach focuses on 
  writing clean, maintainable code while optimizing performance and cross-browser 
  compatibility.
</p>
<p>
  Beyond coding, I stay up-to-date with the latest web development trends and best 
  practices. I am passionate about problem-solving, collaborating in Agile teams, 
  and continuously learning to enhance my technical skill set.
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
                <div className="timeline-date">2024 - Present</div>
                <div className="timeline-content">
                  <h3>Front-end Developer</h3>
                  <p className="timeline-company">IntelliDigest</p>
                  <p className="timeline-description">
                  I have developed scalable and maintainable frontend applications using React, TypeScript, and Redux, ensuring a seamless user experience. 
                  My work includes leading the implementation of responsive design, significantly improving mobile performance and accessibility. 
                  I have collaborated closely with designers (Figma) and backend developers to ensure smooth API integration. 
                  Additionally, I have optimized site load performance by refining rendering processes and implementing effective state management. 
                  My expertise also extends to ensuring cross-browser compatibility and testing components using Jest and React Testing Library to maintain high-quality standards.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2022 - 2023</div>
                <div className="timeline-content">
                  <h3>Software Developer</h3>
                  <p className="timeline-company">MeritTrac</p>
                  <p className="timeline-description">
                  I have developed interactive and engaging UI components with React.js, JavaScript, and TypeScript, focusing on intuitive user experiences. 
                  By leveraging Redux for state management, I have optimized performance and reduced unnecessary re-renders. 
                  My experience includes integrating RESTful APIs for real-time data updates and leading the conversion of Figma designs into pixel-perfect, responsive web pages. 
                  Additionally, I have contributed to improving website performance by implementing code-splitting and lazy loading, successfully reducing load times by 15%.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2019 - 2022</div>
                <div className="timeline-content">
                  <h3>Business Developer</h3>
                  <p className="timeline-company">iB Hubs</p>
                  <p className="timeline-description">
                  I played a key role in managing customer data and CRM systems for the iB Cricket product, which significantly improved client support efficiency. 
                  I collaborated with various placement cells to organize and oversee placement activities, ensuring smooth coordination while also assisting students in technical training to enhance their skills. 
                  Additionally, I worked within a team-oriented environment to efficiently resolve customer queries and technical issues, contributing to a seamless user experience and maintaining high service quality.
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
                <div className="education-year">2019</div>
                <h3 className="education-degree">Bachelor in Computer Science and Engineering(CSE)</h3>
                <p className="education-school">Gayatri Vidhya Parishad College of Engineering(A)</p>
              </div>

              <div className="education-item">
                <div className="education-year">2020</div>
                <h3 className="education-degree">Full Stack Developer(MERN)</h3>
                <p className="education-school">NextWave - Online</p>
              </div>

              <div className="education-item">
                <div className="education-year">2024</div>
                <h3 className="education-degree">Master in Software Engineering</h3>
                <p className="education-school">De MontFort University</p>
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