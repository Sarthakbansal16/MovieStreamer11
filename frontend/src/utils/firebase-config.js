// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCfngf6wr9EXhhs1i2g_jlpYyhEWd-LUU",
  authDomain: "react-netflix-clone-edfbb.firebaseapp.com",
  projectId: "react-netflix-clone-edfbb",
  storageBucket: "react-netflix-clone-edfbb.appspot.com",
  messagingSenderId: "891765982892",
  appId: "1:891765982892:web:9c0c4c7108d8d7d0754109",
  measurementId: "G-MTJPNZ8JG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app); 