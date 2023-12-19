// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from "firebase/auth";

import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9-mSoFOZl-8qxjqos_xklzy4p9RxSUTE",
  authDomain: "chatapp-77333.firebaseapp.com",
  projectId: "chatapp-77333",
  storageBucket: "chatapp-77333.appspot.com",
  messagingSenderId: "478915850330",
  appId: "1:478915850330:web:5b541a0f4f3382b0b86863",
  measurementId: "G-B1ELWRFE8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
