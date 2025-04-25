// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Add this import
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDKnX3RzILa1YGI-1G_zcQ-edSUKJQX3sg",
  authDomain: "my-portfolio12-de931.firebaseapp.com",
  projectId: "my-portfolio12-de931",
  storageBucket: "my-portfolio12-de931.firebasestorage.app",
  messagingSenderId: "64132825132",
  appId: "1:64132825132:web:be1c89a8c9b8740765d189",
  measurementId: "G-BELMBFKZ86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };