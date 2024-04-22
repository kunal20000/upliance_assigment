// authService.js
import firebase from "./firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth();
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful sign-in
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const signOut = () => {
  auth.signOut();
};
