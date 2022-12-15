// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH-c8n8bkUoM7oXx3ey2IdaMVYr4QJw2U",
  authDomain: "quikdine-auth.firebaseapp.com",
  projectId: "quikdine-auth",
  storageBucket: "quikdine-auth.appspot.com",
  messagingSenderId: "531400496889",
  appId: "1:531400496889:web:cc238a378f6e3d98ee3428"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };;