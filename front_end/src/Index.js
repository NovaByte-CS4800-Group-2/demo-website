import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js'; 
import {getFirestore, collection, getDocs, getDoc} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js'

// import the initialize App function 
// creates a firebase app that stores the firebase configuaration fora  project

const firebaseApp = initializeApp ({
    // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyD2X1_Ggtmgs18YQpRSDF1SlpOmp15iUcE", // safe to include on the client side 
    authDomain: "pyro-d9fcd.firebaseapp.com", // can also secure this using App Check 
    databaseURL: "https://pyro-d9fcd-default-rtdb.firebaseio.com",
    projectId: "pyro-d9fcd",
    storageBucket: "pyro-d9fcd.firebasestorage.app",
    messagingSenderId: "663554010744",
    appId: "1:663554010744:web:57edba512781961968078d",
    measurementId: "G-DERPGLFXXP"
    // this is how the system knows to connect to your specific firebase backend
});

const auth = getAuth(firebaseApp); 

// Detect auth state 
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("logged in!");
    } else {
        console.log('no user');
    }
});