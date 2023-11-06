import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

if (!firebase.apps.length) {
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL:
      "https://initialise-6d68a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: process.env.PROJECTID,
    storageBucket: "initialise-6d68a.appspot.com",
    messagingSenderId: process.env.MESSAGINSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
  };
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
