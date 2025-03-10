import React, { createContext, useContext, useEffect } from 'react';

// Create a context for analytics
const AnalyticsContext = createContext();

// Provider component that initializes analytics and provides tracking functions
export const AnalyticsProvider = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined') {
      // Load Google Analytics script (GA4)
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`; // Replace with your GA ID
      script.async = true;
      document.head.appendChild(script);
      
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA ID
    }
  }, []);
  
  // Track resume downloads
  const trackResumeDownload = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'resume_download', {
        'event_category': 'engagement',
        'event_label': 'resume',
        'value': 1
      });
    }
    
    // You could also log to your own backend
    logToBackend('resume_download');
  };
  
  // Track page views
  const trackPageView = (page) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        'page_title': page,
        'page_location': window.location.href,
        'page_path': window.location.pathname
      });
    }
    
    logToBackend('page_view', { 
      page,
      referrer: document.referrer,
      timestamp: new Date().toISOString() 
    });
  };
  
  // Log to your own backend
  const logToBackend = (event, data = {}) => {
    // Only attempt to send if we're in a browser environment
    if (typeof window !== 'undefined') {
      try {
        // Capture additional data like user's IP, browser info, etc.
        const visitorData = {
          ...data,
          userAgent: navigator.userAgent,
          language: navigator.language,
          screenSize: `${window.innerWidth}x${window.innerHeight}`,
          timestamp: new Date().toISOString()
        };
        
        // Send to your backend API
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event,
            data: visitorData
          })
        }).catch(err => console.error('Tracking error:', err));
      } catch (error) {
        console.error('Error logging to backend:', error);
      }
    }
  };
  
  // Track specific portfolio interactions
  const trackPortfolioInteraction = (interactionType, details = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', interactionType, {
        'event_category': 'portfolio_interaction',
        ...details
      });
    }
    
    logToBackend(interactionType, details);
  };
  
  const value = {
    trackResumeDownload,
    trackPageView,
    logToBackend,
    trackPortfolioInteraction
  };
  
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Custom hook to use analytics
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};