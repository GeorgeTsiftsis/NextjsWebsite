import firebase from "firebase/app";
import "firebase/database";

if (!firebase.apps.length) {
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyDE75FtHrwEZSsrXPkDV_WnvzqUu2jxBwE",
    authDomain: "initialise-6d68a.firebaseapp.com",
    databaseURL: "https://initialise-6d68a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "initialise-6d68a",
    storageBucket: "initialise-6d68a.appspot.com",
    messagingSenderId: "861841404703",
    appId: "1:861841404703:web:171266340b7bd049e5f62a",
    measurementId: "G-S6X0HHJ5RL",
  };
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
