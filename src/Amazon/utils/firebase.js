
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCe-edJUM3D0MDTy52tEF9x1VFVL9nEgZ8",
    authDomain: "fir-29543.firebaseapp.com",
    projectId: "fir-29543",
    storageBucket: "fir-29543.appspot.com",
    messagingSenderId: "867852307397",
    appId: "1:867852307397:web:47269e6679ca9182a1d9ac"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };