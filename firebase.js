// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhg1KLo1qqUBGuWr0OMyFzU91MQJtg56M",
  authDomain: "app-communication-9a463.firebaseapp.com",
  projectId: "app-communication-9a463",
  storageBucket: "app-communication-9a463.appspot.com",
  messagingSenderId: "256938571973",
  appId: "1:256938571973:web:e992f6a386e8f9bf7d98ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
