// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD--nQ27c09maOHAEX92sArRqgjuyRC45U",
  authDomain: "helloworld-3b7c1.firebaseapp.com",
  projectId: "helloworld-3b7c1",
  storageBucket: "helloworld-3b7c1.appspot.com",
  messagingSenderId: "701042891875",
  appId: "1:701042891875:web:78327d2e13a4d7325f6c56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
