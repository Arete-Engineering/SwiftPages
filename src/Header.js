import profile_pic from "./temp-pfp.jpg";
import "./styles.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

//Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyCjlP_icdXnh6DbIemKIp4M7xWMkvatgKA",
  authDomain: "omilia-f0b42.firebaseapp.com",
  projectId: "omilia-f0b42",
  storageBucket: "omilia-f0b42.appspot.com",
  messagingSenderId: "11465010307",
  appId: "1:11465010307:web:78a4221e498bfea2af7fb6",
  measurementId: "G-8FWM5P1VDC",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

let project_name = 'Opulent';

export default function Header() {
    const user = auth.currentUser;
    const profile_picture = user ? user.photoURL : profile_pic;

    return (
        <header className="App_header">
            <ul>
                <li><a href="#">{project_name}</a></li>
                <li><a href="#">Earth</a></li>
                <li><a href="#">Create</a></li>
                <li><a href="#">Memory</a></li>
                <li><SignIn /></li>
                <li><img src={profile_picture} alt="ProfilePicture" className="profile_picture"/></li>
            </ul>
        </header>
    )
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <button onClick={signInWithGoogle}>Sign-In</button>
    )
}