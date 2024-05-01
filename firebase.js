// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getReactNativePersistence } from 'firebase/auth/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ezCaZE8SlHzXaVvzj8Yc1zNAFgWVJcY",
  authDomain: "petrade-iii.firebaseapp.com",
  projectId: "petrade-iii",
  storageBucket: "petrade-iii.appspot.com",
  messagingSenderId: "6788476003",
  appId: "1:6788476003:web:7f1a51c8b92c9617c9dc56",
  measurementId: "G-WETY50NNCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth, firestore, storage };