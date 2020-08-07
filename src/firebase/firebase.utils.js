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

export const createUserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=userRef.get();
  const created_at=new Date();
 
  if(!snapShot.exits){
    const{displayName,email}=userAuth;
    try {
      await userRef.set({
        displayName,
        email,
        created_at,
        ...additionalData
      })
    } catch (error) {
      console.log('there has some error in creating user',error.message)
    }
  }
  return userRef;
}

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
