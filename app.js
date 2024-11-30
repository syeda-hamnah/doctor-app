// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  import { getAuth } from "firebase/auth";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCBMErLudTUaACRccF5LBtE-poPQ_nLGkM",
    authDomain: "myproject-9c8f1.firebaseapp.com",
    projectId: "myproject-9c8f1",
    storageBucket: "myproject-9c8f1.firebasestorage.app",
    messagingSenderId: "653080735180",
    appId: "1:653080735180:web:cb26a63b15052412bf4169",
    measurementId: "G-3KJH1WMW9L"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);