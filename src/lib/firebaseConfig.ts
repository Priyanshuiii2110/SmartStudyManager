
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJZy7W94urxAdxEbdmTM9ZQH2Y2H0CNsI",
  authDomain: "smart-study-d9a3a.firebaseapp.com",
  projectId: "smart-study-d9a3a",
  storageBucket: "smart-study-d9a3a.firebasestorage.app",
  messagingSenderId: "364644852339",
  appId: "1:364644852339:web:e853a6f8b8bae5fc6a4006"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
