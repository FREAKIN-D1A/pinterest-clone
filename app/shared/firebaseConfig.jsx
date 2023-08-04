// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	// apiKey: "AIzaSyD7Jn6DHjkKlY9P0xSzqYCgsA0p6PvSi9U",
	apiKey: process.env.FIREBASE_API,
	authDomain: "pinterest-clone-app-meow.firebaseapp.com",
	projectId: "pinterest-clone-app-meow",
	storageBucket: "pinterest-clone-app-meow.appspot.com",
	messagingSenderId: "1098691840741",
	appId: "1:1098691840741:web:337620de808b6529bce20c",
	measurementId: "G-P6JENDGZMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;
export { db };
