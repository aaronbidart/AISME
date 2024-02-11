import firebase from 'firebase/app';
import 'firebase/firestore';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8I3cHpBcaPDqQeMiYjiWATy4T7b6Zcww",
  authDomain: "my-nextjs-project-b0184.firebaseapp.com",
  projectId: "my-nextjs-project-b0184",
  storageBucket: "my-nextjs-project-b0184.appspot.com",
  messagingSenderId: "781889690420",
  appId: "1:781889690420:web:6fb5afde13d66c63446361"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };