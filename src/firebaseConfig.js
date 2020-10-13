import * as firebase from 'firebase';
import 'firebase/database'; 
import "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyCmtdxNZyrB6XHdnSNmgbUjzAfdXQfpwIU",
    authDomain: "e-commerce-4f6d6.firebaseapp.com",
    databaseURL: "https://e-commerce-4f6d6.firebaseio.com",
    projectId: "e-commerce-4f6d6",
    storageBucket: "e-commerce-4f6d6.appspot.com",
    messagingSenderId: "356261870276",
    appId: "1:356261870276:web:c0e9863b14f942c8b0e791",
    measurementId: "G-4ZW1WTJNFC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
  export default firebase.firestore(); 
