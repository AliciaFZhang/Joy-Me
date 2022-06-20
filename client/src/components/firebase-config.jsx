// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzlAA1pc3G6aIRB9D0DLPaCBR5x3xFb-s",
  authDomain: "mvp-joyme.firebaseapp.com",
  projectId: "mvp-joyme",
  storageBucket: "mvp-joyme.appspot.com",
  messagingSenderId: "807708030415",
  appId: "1:807708030415:web:23d02addb366c602efceba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();