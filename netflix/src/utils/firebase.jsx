// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVXPd0bLD-18AvgRISI7uoFrbBCgtR24o",
  authDomain: "netflix-a9b64.firebaseapp.com",
  projectId: "netflix-a9b64",
  storageBucket: "netflix-a9b64.firebasestorage.app",
  messagingSenderId: "725715882816",
  appId: "1:725715882816:web:8438f8a53e122d3fb4a0a5",
  measurementId: "G-BL5P7DTKET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);