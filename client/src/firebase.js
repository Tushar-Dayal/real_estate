// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-43ff4.firebaseapp.com",
  projectId: "realestate-43ff4",
  storageBucket: "realestate-43ff4.appspot.com",
  messagingSenderId: "99247271213",
  appId: "1:99247271213:web:aff5958c1ee33711ef77a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);