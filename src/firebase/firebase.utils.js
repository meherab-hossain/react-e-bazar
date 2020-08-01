import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAY4dEwQdwdiaaH1dZ63NY_iEEII7fM1IU",
  authDomain: "ebazar-db.firebaseapp.com",
  databaseURL: "https://ebazar-db.firebaseio.com",
  projectId: "ebazar-db",
  storageBucket: "ebazar-db.appspot.com",
  messagingSenderId: "319000082002",
  appId: "1:319000082002:web:f4604bdbf527f98f3ad18b",
  measurementId: "G-3MQBM4B90J",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
