import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq2I2lQ8eS7WkGdc1sO0qye7nl_qm2FUU",
  authDomain: "my-task-e7a66.firebaseapp.com",
  projectId: "my-task-e7a66",
  storageBucket: "my-task-e7a66.appspot.com",
  messagingSenderId: "233156629415",
  appId: "1:233156629415:web:14e58adfcd965cda9c9c82"
};

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de Authentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);