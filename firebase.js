import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYgN7ONhaw6FcvRMJ1oCgKLHDMy_8z6rs",
  authDomain: "avimail-buld.firebaseapp.com",
  projectId: "avimail-buld",
  storageBucket: "avimail-buld.appspot.com",
  messagingSenderId: "599938499876",
  appId: "1:599938499876:web:d1260fbcf408f4fa335fb1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
