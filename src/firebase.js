import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkwPb50XFT5YeWeD7X-95qyiQenM6oVtA",
    authDomain: "my-cart-cdef2.firebaseapp.com",
    projectId: "my-cart-cdef2",
    storageBucket: "my-cart-cdef2.appspot.com",
    messagingSenderId: "113194950776",
    appId: "1:113194950776:web:126e0f89ec66612f344d8d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore;