import React from 'react';
import './style/contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <div className="section-container">
          <h1 className="page-title reveal">Get In Touch</h1>
          <p className="page-description reveal">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info reveal">
              <h2 className="section-title">Contact Information</h2>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Email</h3>
                  <p className="info-text">youremail@example.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Phone</h3>
                  <p className="info-text">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Location</h3>
                  <p className="info-text">City, Country</p>
                </div>
              </div>
              
              <div className="social-links">
                <h3 className="social-title">Connect With Me</h3>
                <div className="social-icons">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container reveal">
              <h2 className="section-title">Send a Message</h2>
              
              {/* Form success message (hidden by default) */}
              <div className="form-message success" style={{display: 'none'}}>
                Thank you for your message! I will get back to you soon.
              </div>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                  />
                  <span className="error-message" style={{display: 'none'}}>Name is required</span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                  />
                  <span className="error-message" style={{display: 'none'}}>Email is required</span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                  />
                  <span className="error-message" style={{display: 'none'}}>Subject is required</span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                  ></textarea>
                  <span className="error-message" style={{display: 'none'}}>Message is required</span>
                </div>
                
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map or Location Section */}
      <div className="location-section reveal">
        <div className="map-container">
          {/* In a real application, you would embed a Google Map here */}
          <div className="map-placeholder">
            <div className="map-text">
              <i className="fas fa-map-marked-alt"></i>
              <span>Map location would be displayed here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;