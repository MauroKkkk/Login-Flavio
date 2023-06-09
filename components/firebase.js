// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6hSUOdN7zE2MEoUgQHRwWFaRt5nR1tH4",
  authDomain: "react-969b8.firebaseapp.com",
  projectId: "react-969b8",
  storageBucket: "react-969b8.appspot.com",
  messagingSenderId: "57890652289",
  appId: "1:57890652289:web:ba65aa6b6cd68dbe794d80",
  measurementId: "G-K7MENJ0YS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth  = getAuth(app);
export { app, db, storage, auth }

