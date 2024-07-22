// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMFzMpcsDbTXDZqqSxtjbkYfnbryxsUpI",
  authDomain: "netflixgpt-757d9.firebaseapp.com",
  projectId: "netflixgpt-757d9",
  storageBucket: "netflixgpt-757d9.appspot.com",
  messagingSenderId: "887673950661",
  appId: "1:887673950661:web:59b9cedf90da27d6c53bac",
  measurementId: "G-DMX7BQP446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();