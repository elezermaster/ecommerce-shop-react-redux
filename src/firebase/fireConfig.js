// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyRzk3daCrrqBmFODyVd6HD3R44e3gjAk",
  authDomain: "firecommerce-shop.firebaseapp.com",
  projectId: "firecommerce-shop",
  storageBucket: "firecommerce-shop.appspot.com",
  messagingSenderId: "765352579126",
  appId: "1:765352579126:web:8111030e387a7882f8c897",
  measurementId: "G-9LRXJ6QY96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const fireDB = getFirestore(app)

export default fireDB;



