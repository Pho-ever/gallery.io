// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn9qglwN7JAQaXUi2sgqfVqZGGKrFmz6k",
  authDomain: "image-gallery-94815.firebaseapp.com",
  projectId: "image-gallery-94815",
  storageBucket: "image-gallery-94815.appspot.com",
  messagingSenderId: "1023686442691",
  appId: "1:1023686442691:web:ef60906d4de2ad2b02ec76",
  measurementId: "G-JR98W1EL9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {app, auth, analytics, db};