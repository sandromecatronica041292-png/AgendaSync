import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCs94oQiZYkNW8qW85bFpN_XhUJRCH9QFQ",
  authDomain: "agendasyncoficial.firebaseapp.com",
  projectId: "agendasyncoficial",
  storageBucket: "agendasyncoficial.firebasestorage.app",
  messagingSenderId: "831022826185",
  appId: "1:831022826185:web:7d17aae78b0bc2dc56c318"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase conectado 🚀");
