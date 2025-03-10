import React from 'react';
import './style/Projects.css';

const Projects = () => {
  // Sample static projects array
  const visibleProjects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: '#3498db',
      technologies: ['React', 'Node.js', 'MongoDB'],
      description: 'A full-featured e-commerce platform with product management, cart functionality, and secure checkout.',
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Design',
      category: 'design',
      image: '#2ecc71',
      technologies: ['Figma', 'HTML', 'CSS', 'JavaScript'],
      description: 'A modern portfolio website design with animations and responsive layout.',
      link: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Mobile App UI',
      category: 'mobile',
      image: '#e67e22',
      technologies: ['React Native', 'Firebase'],
      description: 'A clean, intuitive mobile app interface for a productivity tool.',
      link: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Blog Platform',
      category: 'web',
      image: '#9b59b6',
      technologies: ['WordPress', 'Custom Theme'],
      description: 'A customized blog platform with content management system and newsletter integration.',
      link: '#',
      featured: true
    }
  ];

  return (
    <section className="projects-page">
      {/* Header Section */}
      <div className="projects-header">
        <div className="section-container">
          <h1 className="page-title reveal">My Projects</h1>
          <p className="page-description reveal">
            Explore my recent work and creative projects. Each project represents my passion for 
            creating intuitive, visually appealing, and functional digital experiences.
          </p>
        </div>
      </div>

      <div className="projects-content">
        <div className="section-container">
          {/* Project filters */}
          <div className="projects-filter reveal">
            <button className="filter-button active">All</button>
            <button className="filter-button">Web</button>
            <button className="filter-button">Design</button>
            <button className="filter-button">Mobile</button>
          </div>

          {/* Projects grid */}
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <div 
                key={project.id} 
                className="project-card reveal"
                data-category={project.category}
              >
                <div 
                  className="project-image" 
                  style={{ backgroundColor: project.image }}
                >
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a href={`#details-${project.id}`} className="project-link details">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="projects-cta reveal">
        <div className="section-container">
          <h2 className="cta-title">Have a project in mind?</h2>
          <p className="cta-description">
            I'm always open to discussing new projects and creative ideas.
          </p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;