import Header from '../components/Header';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import DocumentList from "../components/DocumentList";
import Footer from "../components/Footer";

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
export default function Profile() {
    const [user] = useAuthState(auth);
    const profile_picture = user ? user.photoURL : "Profile Picture Null";
    const username = user ? user.displayName : "Username";
    const userID = user ? user.uid : null;
    return (
        <>
            <Header />
            <img src={profile_picture} alt="Profile Picture" />
            <h2>{username}</h2>
            <p>Some random and not-so-stupid bio.</p>
            {userID && <DocumentList userID={userID} />}
            <button
                onClick={() => auth.signOut()}
                type="button"
                className="btn btn-dark btn-sm"
            >
                Sign-Out
            </button>
            <Footer />
        </>
    )
}