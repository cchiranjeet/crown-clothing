import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyABmaudGfGE92H9EPSnVa9maNlhbW-H0jE",
  authDomain: "crown-clothing-99388.firebaseapp.com",
  databaseURL: "https://crown-clothing-99388.firebaseio.com",
  projectId: "crown-clothing-99388",
  storageBucket: "crown-clothing-99388.appspot.com",
  messagingSenderId: "574953829306",
  appId: "1:574953829306:web:d9a20008fe692807882383",
  measurementId: "G-QFSESW7R15"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoofle = () => auth.signInWithPopup(provider);

export default firebase;
