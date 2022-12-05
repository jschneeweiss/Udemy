import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtFGRGTK-v-wIEPUW__90aGXVhWSs-kPQ",
    authDomain: "crwn-clothing-db-64b94.firebaseapp.com",
    projectId: "crwn-clothing-db-64b94",
    storageBucket: "crwn-clothing-db-64b94.appspot.com",
    messagingSenderId: "884746192234",
    appId: "1:884746192234:web:435aae76330d461cca9113"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    promt: 'select_account'
});

export const auth = getAuth();
export const signInWithGoolgePopup = () => signInWithPopup(auth, provider);