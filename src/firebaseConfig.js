// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9xYOUGN974lCC1Esf0NSSlo4DlRHgpr0",
  authDomain: "bomps-c4d9a.firebaseapp.com",
  projectId: "bomps-c4d9a",
  storageBucket: "bomps-c4d9a.appspot.com",
  messagingSenderId: "231009624589",
  appId: "1:231009624589:web:39124d7b85250a0d2e6b44",
  measurementId: "G-WN3F622YLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

export default app; // Export the initialized app
