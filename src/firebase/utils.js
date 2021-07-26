import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWpwiqN_i69ra91srB_pfxowhUV5pJbS8",
  authDomain: "ecommerce-8d00f.firebaseapp.com",
  projectId: "ecommerce-8d00f",
  storageBucket: "ecommerce-8d00f.appspot.com",
  messagingSenderId: "94199723319",
  appId: "1:94199723319:web:d6c1acf8532e50812056b2",
};

export const createUser = async (userData, otherData) => {
  if (!userData) return;

  const userRef = firestore.doc(`users/${userData.uid}`);
  const snapshot = await userRef.get();

  console.log(snapshot);

  if (!snapshot.exists) {
    const { displayName, email } = userData;
    const createdAt = Date.now();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
