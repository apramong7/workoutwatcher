// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAQR_-djih1nnHxf-Yr_fgAGrgiX2d03Wg",
//   authDomain: "workoutwatcher-e455c.firebaseapp.com",
//   projectId: "workoutwatcher-e455c",
//   storageBucket: "workoutwatcher-e455c.appspot.com",
//   messagingSenderId: "538540918852",
//   appId: "1:538540918852:web:2c23973a469d10824d5411"
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };

// firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsSABPno4ALWPQRQc9V9UNXW2UsRVsz5U",
  authDomain: "workoutwatcher-654cd.firebaseapp.com",
  projectId: "workoutwatcher-654cd",
  storageBucket: "workoutwatcher-654cd.appspot.com",
  messagingSenderId: "631440950097",
  appId: "1:631440950097:web:9bb9cda8e6d5aa67204970"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
