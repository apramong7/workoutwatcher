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
