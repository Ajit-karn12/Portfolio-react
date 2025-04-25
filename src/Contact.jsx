import React, { useState, useEffect } from 'react';
import { useAnalytics } from './utils/Analytics';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './style/Contact.css';

const Contact = () => {
  const { trackPageView } = useAnalytics();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Track page view with error handling
    try {
      trackPageView('Contact');
    } catch (error) {
      console.error('Error tracking page view:', error);
      // Continue execution - analytics failure shouldn't break the UI
    }

    // Initialize animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    try {
      document.querySelectorAll('.reveal').forEach(item => {
        observer.observe(item);
      });
    } catch (error) {
      console.error('Error initializing animations:', error);
      // Animation failure shouldn't break the page
    }

    return () => {
      // Clean up observer with error handling
      try {
        document.querySelectorAll('.reveal').forEach(item => {
          observer.unobserve(item);
        });
      } catch (error) {
        console.error('Error cleaning up observer:', error);
      }
    };
  }, [trackPageView]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission with enhanced error handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) {
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if Firebase is initialized
      if (!db) {
        throw new Error('Firebase database not initialized');
      }
      
      // Create a local copy of form data for submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp()
      };
      
      // Save form data to Firebase Firestore with timeout
      const submissionPromise = addDoc(collection(db, 'contactMessages'), submissionData);
      
      // Add a timeout to prevent hanging if Firebase is slow
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timed out')), 10000)
      );
      
      await Promise.race([submissionPromise, timeoutPromise]);
      
      // Show success message
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      });
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Log success to console
      console.log('Message submitted successfully');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Provide specific error messages based on error type
      let errorMessage = 'There was an error sending your message. Please try again.';
      
      if (error.code) {
        switch (error.code) {
          case 'permission-denied':
            errorMessage = 'You do not have permission to submit this form. Please try again later.';
            break;
          case 'unavailable':
            errorMessage = 'The service is currently unavailable. Please try again later.';
            break;
          case 'not-found':
            errorMessage = 'The database collection was not found. Please contact the administrator.';
            break;
          default:
            errorMessage = `Error: ${error.message}`;
        }
      } else if (error.message === 'Request timed out') {
        errorMessage = 'The request timed out. Please check your internet connection and try again.';
      }
      
      setFormStatus({
        submitted: true,
        success: false,
        message: errorMessage
      });
      
      // Fallback: Store submission locally in case Firebase fails
      try {
        const submissionBackup = {
          ...formData,
          timestamp: new Date().toISOString()
        };
        localStorage.setItem('contact_form_backup', JSON.stringify(submissionBackup));
        console.log('Form data backed up locally due to submission error');
      } catch (backupError) {
        console.error('Error creating backup:', backupError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page" style={{ width: '100vw', maxWidth: '100%', overflow: 'hidden' }}>
      <div className="contact-header" style={{ width: '100vw', maxWidth: '100%' }}>
        <div className="section-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="page-title reveal">Get In Touch</h1>
          <p className="page-description reveal">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="contact-content" style={{ width: '100vw', maxWidth: '100%' }}>
        <div className="section-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
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
                  <p className="info-text">ajitkarn12@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Phone</h3>
                  <p className="info-text">+44 7944369695</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3 className="info-title">Location</h3>
                  <p className="info-text">Leicester, United Kingdom</p>
                </div>
              </div>
              
              <div className="social-links">
                <h3 className="social-title">Connect With Me</h3>
                <div className="social-icons">
                  <a href="https://github.com/Ajit-karn12/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ajit-karn-b134a1126/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/ajkarn12/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container reveal">
              <h2 className="section-title">Send a Message</h2>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map or Location Section */}
      <div className="location-section reveal" style={{ width: '100vw', maxWidth: '100%' }}>
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