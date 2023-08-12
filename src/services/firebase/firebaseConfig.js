import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx7krWFX7Mx3qeatPql4wB4xeHUtgexrk",
  authDomain: "react-e-commerce-acdd0.firebaseapp.com",
  projectId: "react-e-commerce-acdd0",
  storageBucket: "react-e-commerce-acdd0.appspot.com",
  messagingSenderId: "1020534400283",
  appId: "1:1020534400283:web:8f8a7a90a1b07718fcdfbe",
  measurementId: "G-ETMH0H406N",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
