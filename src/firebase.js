import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbsRq6pq30KIXV0c88RCVKPio3xHEOTZ4",
  authDomain: "e-commerce-7a6a3.firebaseapp.com",
  projectId: "e-commerce-7a6a3",
  storageBucket: "e-commerce-7a6a3.appspot.com",
  messagingSenderId: "535217759179",
  appId: "1:535217759179:web:7a2fe0c3722c4453bacc4e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
