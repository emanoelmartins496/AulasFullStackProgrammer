import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDptbm5EpJPxZxwcbjPE14RdNfmCe1dk6A",
  authDomain: "react-project-89920.firebaseapp.com",
  projectId: "react-project-89920",
  storageBucket: "react-project-89920.appspot.com",
  messagingSenderId: "1040603854833",
  appId: "1:1040603854833:web:1451f064ad6755c2f6f650"
};


// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de Authentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);