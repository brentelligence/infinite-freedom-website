import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsvDSFfxNfXrhbFxAQGTG-LqmWX4FM0PM",
    authDomain: "infinite-freedom-e10f7.firebaseapp.com",
    projectId: "infinite-freedom-e10f7",
    storageBucket: "infinite-freedom-e10f7.firebasestorage.app",
    messagingSenderId: "100536243254",
    appId: "1:100536243254:web:1eccc34d2e10b7c7827497",
    measurementId: "G-5D79BZ6EYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
