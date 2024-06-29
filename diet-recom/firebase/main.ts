// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

function initializeAppIfNecessary() {
  try {
    return getApp();
  } catch (any) {
    const firebaseConfig = {
      apiKey: "AIzaSyBlc9lXFtf11R2bMdUFz9pFyFnXmexgSEs",
      authDomain: "nutritrack-35d14.firebaseapp.com",
      projectId: "nutritrack-35d14",
      storageBucket: "nutritrack-35d14.appspot.com",
      messagingSenderId: "328123018704",
      appId: "1:328123018704:web:cf61f097b7588236bc1dd5",
      measurementId: "G-F59VECJ4DY",
    };
    return initializeApp(firebaseConfig);
  }
}
// if a Firebase instance doesn't exist, create one
const app = initializeAppIfNecessary();
if (typeof window !== "undefined") {
  getAnalytics(app);
}
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);