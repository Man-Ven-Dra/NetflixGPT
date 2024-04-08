// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAd_pFpc5d-psZZseLsntu3kIIO3tnpzg",
  authDomain: "netflixgpt-26153.firebaseapp.com",
  projectId: "netflixgpt-26153",
  storageBucket: "netflixgpt-26153.appspot.com",
  messagingSenderId: "778579740177",
  appId: "1:778579740177:web:bfa875c888380dbc5d13b0",
  measurementId: "G-9GZ79VE7F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();