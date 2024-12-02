// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGpjJBZNXRseR0DTxHa_1auxzwIYZMMRQ",
  authDomain: "dragon-news-auth-6cb67.firebaseapp.com",
  projectId: "dragon-news-auth-6cb67",
  storageBucket: "dragon-news-auth-6cb67.firebasestorage.app",
  messagingSenderId: "422352686061",
  appId: "1:422352686061:web:9b1ec84ace82c929ffb5e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;