import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQInkqAJPoE-01SPRkW_A1GhrykgAd0D4",
  authDomain: "upliance-f27f4.firebaseapp.com",
  projectId: "upliance-f27f4",
  storageBucket: "upliance-f27f4.appspot.com",
  messagingSenderId: "594183747470",
  appId: "1:594183747470:web:f638294b476ef319a996df",
  measurementId: "G-N25N5E8HP4",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
