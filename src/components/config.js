// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAerSbjh6kXnquvFbqfNeCuKQE-cYk6FfU",
  authDomain: "controle-de-estoque-5f4ad.firebaseapp.com",
  projectId: "controle-de-estoque-5f4ad",
  storageBucket: "controle-de-estoque-5f4ad.appspot.com",
  messagingSenderId: "450362383397",
  appId: "1:450362383397:web:1548371122c1a996ebf3cc",
  measurementId: "G-0KY9JZYLXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}