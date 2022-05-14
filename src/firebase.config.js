// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2uo1y84VBOMrUbh0FAaOMX6dWoaG21Is",
  authDomain: "warehouse-9b670.firebaseapp.com",
  projectId: "warehouse-9b670",
  storageBucket: "warehouse-9b670.appspot.com",
  messagingSenderId: "282960761757",
  appId: "1:282960761757:web:dcca7db810662932cc5574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;