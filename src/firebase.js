
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCbQ0dbZhiKoP76EYLrvVd3ric0AqjVXSo",
  authDomain: "chat-app-bfe67.firebaseapp.com",
  projectId: "chat-app-bfe67",
  storageBucket: "chat-app-bfe67.appspot.com",
  messagingSenderId: "850463148131",
  appId: "1:850463148131:web:a9538eeda2848506641056"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();