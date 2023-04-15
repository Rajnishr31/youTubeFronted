import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7vSwAslpyFSSTBCKSJttgk20ZBHkKxJs",
  authDomain: "video-f8248.firebaseapp.com",
  projectId: "video-f8248",
  storageBucket: "video-f8248.appspot.com",
  messagingSenderId: "958185884045",
  appId: "1:958185884045:web:9f6d5f9e45411e982e15c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;