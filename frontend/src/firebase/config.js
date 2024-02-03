import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzf_bUm5AQlSM09QVBH5GqzSV_0ijVwsc",
  authDomain: "strapi-ecommerce-397f4.firebaseapp.com",
  projectId: "strapi-ecommerce-397f4",
  storageBucket: "strapi-ecommerce-397f4.appspot.com",
  messagingSenderId: "344529725422",
  appId: "1:344529725422:web:4d3296f4ac995e79e890ff",
  measurementId: "G-JZ5FSSF1CX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
