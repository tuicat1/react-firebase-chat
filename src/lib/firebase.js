import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-33f1d.firebaseapp.com",
  projectId: "reactchat-33f1d",
  storageBucket: "reactchat-33f1d.appspot.com",
  messagingSenderId: "628482012250",
  appId: "1:628482012250:web:79be9ec702c345dbf45463",
  measurementId: "G-PTVKGE7PM4"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
