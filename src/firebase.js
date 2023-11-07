// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAssyMGZ6gWcqnPd_5Oa8AZvIvD6tnjJLk",
  authDomain: "techserve-74ca7.firebaseapp.com",
  projectId: "techserve-74ca7",
  storageBucket: "techserve-74ca7.appspot.com",
  messagingSenderId: "507574897263",
  appId: "1:507574897263:web:85c0551de3c424cfc39b9a",
  measurementId: "G-P95Y74THT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);