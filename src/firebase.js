// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbnXDpImBGcqY3spv3-tKELRBHM8kjvOs",
  authDomain: "findfriends-66676.firebaseapp.com",
  projectId: "findfriends-66676",
  storageBucket: "findfriends-66676.firebasestorage.app",
  messagingSenderId: "26932521600",
  appId: "1:26932521600:web:55533976aaf9d7e80dd465",
  measurementId: "G-P8RVSMXS3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);