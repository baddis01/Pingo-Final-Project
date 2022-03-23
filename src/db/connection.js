import { initializeApp } from "firebase/app";
import firebaseConfig from "../db/config.js";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
