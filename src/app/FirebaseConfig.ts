import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyASiS8VkVUOgSQsd1edqUgcbhV_ijYUkWY",
  authDomain: "angular-stuff-a75c9.firebaseapp.com",
  databaseURL: "https://angular-stuff-a75c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-stuff-a75c9",
  storageBucket: "angular-stuff-a75c9.firebasestorage.app",
  messagingSenderId: "279219199775",
  appId: "1:279219199775:web:5973c3094bbcaaad621a2a",
  measurementId: "G-L181K5CRZ2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);