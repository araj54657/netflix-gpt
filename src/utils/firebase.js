// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhgY-LYB05k6DGdCwq9tRNBq4issUxAc0",
  authDomain: "netflixgpt-7d48f.firebaseapp.com",
  projectId: "netflixgpt-7d48f",
  storageBucket: "netflixgpt-7d48f.appspot.com",
  messagingSenderId: "525407645553",
  appId: "1:525407645553:web:378d6f2bceaf005551d0d0",
  measurementId: "G-G3B8T90FBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
