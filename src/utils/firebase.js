import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCekPQKZ9VKSQyejTrE_LVX-ML06lJ7yKc",
  authDomain: "lottery-919fb.firebaseapp.com",
  databaseURL: "https://lottery-919fb-default-rtdb.firebaseio.com",
  projectId: "lottery-919fb",
  storageBucket: "lottery-919fb.appspot.com",
  messagingSenderId: "1091879596445",
  appId: "1:1091879596445:web:700d31587318565dc0bf74",
  measurementId: "G-PHKF4KJC4T",
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);



export { app, auth, db };