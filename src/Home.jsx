import React from 'react'
import {Link} from 'react-router-dom';
import './style/Home.css'

function Home() {
  return (
    <section className='home'>
      <div className='hero-section'>
        <div className='hero-container'>
          <div className='hero-content reveal'>
            <h1 className='hero-title'>
              <span className='hello-text'>Hello, I'm </span>
              <span className='name-text'>Ajit karn</span>
            </h1>
            <h2 className='hero-subtitle'> web developer & Designer</h2>
            <p className='hero-description'>
              I create beautiful, responsive websites that deliver exceptional user experiences.
            </p>
            <div className='hero-cta'>
            <Link to='/projects' className='cta-button'>VIEW WORK</Link>
            <a href='resume.pdf' download className='cta-button secondary'>DOWNLOAD RESUME</a>
            </div>
          </div>
          <div className='hero-image reveal'>
            <div className='profile-image'>
              {/* replace with your actual image*/}
              <div className='profile-placeholder'>
                <span>YOUR PHOTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED PROJECTS SECTIONS*/}
      <div className='featured-projects'>
  <div className='section-container'>
    <div className='section-header reveal'>
      <h2 className='section-title'>Featured Projects</h2>
      <div className='section-line'></div>
    </div>

          <div className='projects-grid'>
            {/*projects 1 */}
            <div className='project-card reveal'>
              <div className='proejct-image' style={{backgroundColor: '#3498db'}}>
                <span className='project-number'>PROJECT 1</span>
              </div>
              <div className='project-info'>
                <h3 className='project-title'>E-commerce website</h3>
                <p className='project-tech'>React, Node.js MongoDB</p>
                <Link to='/projects' className='project-link'>view details</Link>
              </div>
            </div>

            {/* proejct 2*/}
            <div className='project-card reveal'>
              <div className='proejct-image' style={{backgroundColor: '#2ecc71'}}>
                <span className='project-number'>PROJECT 2</span>
              </div>
              <div className='project-info'>
                <h3 className='project-title'>Portfolio Design</h3>
                <p className='project-tech'>React, Node.js MongoDB, figma, html, css, javascript</p>
                <Link to='/projects' className='project-link'>view details</Link>
              </div>
            </div>
          </div>

          <div className='view-all-container reveal'>
            <Link to='/projects' className='view-all-button'> view All Projects</Link>
          </div>
        </div>
      </div>

      {/**/}
      <div className='skills-preview'>
        <div className='section-container'>
          <div className='section-header reveal'>
            <h2 className='section-title'>My Skills</h2>
            <div className='section-line'></div>
          </div>

          <div className='skills-preview-container reveal'>
            <div className='skill-item'>
              <div className='skill-info'>
                <h3 className='skill-name'>HTML/CSS</h3>
                <span className='skill-percentage'>90%</span>
              </div>

              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{width:'90%'}}></div>
              </div>
            </div>

            <div className='skill-item'>
              <div className='skill-info'>
                <h3 className='skill-name'>Javascript</h3>
                <span className='skill-percentage'>80%</span>
              </div>

              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{width: '80%'}}></div>
              </div>
            </div>

            <div className='skill-item'>
              <div className='skill-info'>
                <h3 className='skill-name'>React</h3>
                <span className='skill-percentage'>75%</span>
              </div>

              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{width: '75%' }}></div>
              </div>
            </div>
          </div>

          <div className='view-all-container reveal'>
            <Link to='/skills' className='view-all-button'>View all Skills</Link>
          </div>
        </div>
      </div>

      {/* call to action section*/}

      <div className='cta-section reveal'>
        <div className='cta-container'>
          <h2 className='cta-title'> Interested in working togther?</h2>
          <p className='cta-description'>Let's discuss your proeject and see how I can help bring your ideas to life.</p>
          <Link to='/contact' className="cta-button">GET IN TOUCH</Link>
        </div>
      </div>
    </section>
  )
}

export default Home