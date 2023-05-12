 
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 
const firebaseConfig = {
  apiKey: "AIzaSyC-ex1k9rJn9arJkdFLUeajexwUAiJG-PY",
  authDomain: "auth1-development-d6a8e.firebaseapp.com",
  projectId: "auth1-development-d6a8e",
  storageBucket: "auth1-development-d6a8e.appspot.com",
  messagingSenderId: "376746272347",
  appId: "1:376746272347:web:83a89d581de89ef276017e"
}; 

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)