import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCn7ZtUX_uHL2_Y5gJvtxOoNlNwa1q4bFQ",
    authDomain: "cosima-hewes.firebaseapp.com",
    projectId: "cosima-hewes",
    storageBucket: "cosima-hewes.appspot.com",
    messagingSenderId: "871476288332",
    appId: "1:871476288332:web:4519b261f4fddb15f10de9",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
