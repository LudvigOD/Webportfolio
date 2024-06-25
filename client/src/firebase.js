// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAAdmYIOIwTYzhaMTHG-HRKYl2HEn94ZuQ",

  authDomain: "portfolio-2024-06-20.firebaseapp.com",

  projectId: "portfolio-2024-06-20",

  storageBucket: "portfolio-2024-06-20.appspot.com",

  messagingSenderId: "57227371239",

  appId: "1:57227371239:web:3517ce0a9b85950fa27842",

  measurementId: "G-ZZN1PFZED2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); // Corrected to getFirestore
export const auth = getAuth(app); // Corrected to getAuth