import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyCTCre8qK3M4T7tdrpct1dkwvpeec9nhRY",
    authDomain: "ecom-db-dcd90.firebaseapp.com",
    databaseURL: "https://ecom-db-dcd90.firebaseio.com",
    projectId: "ecom-db-dcd90",
    storageBucket: "ecom-db-dcd90.appspot.com",
    messagingSenderId: "252150942275",
    appId: "1:252150942275:web:15a2d6c9affe48595422f6",
    measurementId: "G-T1V7S1834H"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

