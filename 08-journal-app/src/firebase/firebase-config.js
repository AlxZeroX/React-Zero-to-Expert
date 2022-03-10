import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCW3SwXD1vBbze-atiufUXyHInC6GTj9Ls",
  authDomain: "react-app-curso-84eb5.firebaseapp.com",
  projectId: "react-app-curso-84eb5",
  storageBucket: "react-app-curso-84eb5.appspot.com",
  messagingSenderId: "863083438657",
  appId: "1:863083438657:web:cc8c2bb4abd43d64f35cc0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
  db,
  googleAuthProvider,
  firebase
}
