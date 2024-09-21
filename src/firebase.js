import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbQuAHmB5tM8AtoGIpaprvf7SH9k2WAzg",
  authDomain: "simple-learning-37aac.firebaseapp.com",
  databaseURL:
    "https://simple-learning-37aac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "simple-learning-37aac",
  storageBucket: "simple-learning-37aac.appspot.com",
  messagingSenderId: "479050561342",
  appId: "1:479050561342:web:e5c5ebf9ef30f14e725e6f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
