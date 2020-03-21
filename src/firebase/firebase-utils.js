import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCG8kzKbMDtWvqsVuyF9qQPSbcSoVR7KB0",
  authDomain: "asl-db.firebaseapp.com",
  databaseURL: "https://asl-db.firebaseio.com",
  projectId: "asl-db",
  storageBucket: "asl-db.appspot.com",
  messagingSenderId: "482767265586",
  appId: "1:482767265586:web:6db82a3778bccb5ed5812b",
  measurementId: "G-3CVG78ZEZH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
