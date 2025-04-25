import { createContext, useContext, useEffect } from 'react';
// import { analytics } from './firebase';
import { analytics } from '../firebase';
import { logEvent } from 'firebase/analytics';
// import { db } from './firebase';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Create a context for analytics
const AnalyticsContext = createContext();

// Provider component that initializes analytics
export const AnalyticsProvider = ({ children }) => {
  useEffect(() => {
    // Any initialization code can go here
  }, []);
  
  // Track resume downloads
  const trackResumeDownload = () => {
    try {
      // Log event to Firebase Analytics
      logEvent(analytics, 'resume_download', {
        'event_category': 'engagement',
        'event_label': 'resume',
        'value': 1
      });
      
      // Also store in Firestore for more detailed tracking
      addDoc(collection(db, 'resumeDownloads'), {
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer,
        page: window.location.pathname
      }).then(() => {
        console.log('Resume download tracked successfully');
      }).catch(error => {
        console.error('Error storing resume download data:', error);
      });
    } catch (error) {
      console.error('Error tracking resume download:', error);
    }
  };
  
  // Track page views
  const trackPageView = (page) => {
    try {
      // Log event to Firebase Analytics
      logEvent(analytics, 'page_view', {
        page_title: page,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
      
      // Also store in Firestore
      addDoc(collection(db, 'pageViews'), {
        page,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer
      }).then(() => {
        console.log('Page view tracked successfully');
      }).catch(error => {
        console.error('Error storing page view data:', error);
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };
  
  const value = {
    trackResumeDownload,
    trackPageView
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