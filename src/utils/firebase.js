// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgBB4ytmHlGZC9kddayJo1ufh7I0yB5Tw",
  authDomain: "netflixgpt-5673a.firebaseapp.com",
  projectId: "netflixgpt-5673a",
  storageBucket: "netflixgpt-5673a.firebasestorage.app",
  messagingSenderId: "783657601672",
  appId: "1:783657601672:web:cf9d3b8fa962a5c0f92d3d",
  measurementId: "G-R456ZRS0GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);