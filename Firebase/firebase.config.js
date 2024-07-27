// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3mxyIJ91zr2oMogu7CK8NtKicYK-qyqU",
  authDomain: "my-portfolio-f42f6.firebaseapp.com",
  projectId: "my-portfolio-f42f6",
  storageBucket: "my-portfolio-f42f6.appspot.com",
  messagingSenderId: "740736859849",
  appId: "1:740736859849:web:f1f97b510c4a9d4b3ad718",
  measurementId: "G-JQQ072TFC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;