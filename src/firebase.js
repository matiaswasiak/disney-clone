import firebase from "firebase";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAswZk2oizA7rbkKSeBpbKr2Co_yVdsxw4",
  authDomain: "disneyplus-clone-95434.firebaseapp.com",
  projectId: "disneyplus-clone-95434",
  storageBucket: "disneyplus-clone-95434.appspot.com",
  messagingSenderId: "805167056173",
  appId: "1:805167056173:web:ca2fc21687eacfff3cffa4",
  measurementId: "G-WZYKFSFXHW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
