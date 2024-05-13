import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA7OjNV_fF96c1_dsbSXUYVdnfTNWmN3Lo",
  authDomain: "crudapp-a2f4d.firebaseapp.com",
  projectId: "crudapp-a2f4d",
  storageBucket: "crudapp-a2f4d.appspot.com",
  messagingSenderId: "1086659071458",
  appId: "1:1086659071458:web:1ce65ca67b0b8a32f7bdbb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth};
