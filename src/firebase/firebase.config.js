// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9dAEWC94eRHQAi1Lb8iRkTumkXArhGaY",
  authDomain: "ema-john-with-firebase-a-c8c03.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-c8c03",
  storageBucket: "ema-john-with-firebase-a-c8c03.appspot.com",
  messagingSenderId: "735298186481",
  appId: "1:735298186481:web:fd907400878b5874de8d50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;