import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzqWoIg4JAULLLQG7ryM-G9c8YegyeMDQ",
  authDomain: "petcheck-be672.firebaseapp.com",
  projectId: "petcheck-be672",
  storageBucket: "petcheck-be672.firebasestorage.app",
  messagingSenderId: "753312676098",
  appId: "1:753312676098:web:468e35d0239ce8c046aa1b",
  measurementId: "G-RCHF1M086M"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
