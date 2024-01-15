import profile_pic from "./temp-pfp.jpg";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";

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

let project_name = "Opulent";

export default function Header() {
  const [user] = useAuthState(auth);
  const profile_picture = user ? user.photoURL : profile_pic;

  return (
    <header className="App_header" style={{ backgroundColor: "#0A0A0E" }}>
      <ul>
        <li>
          <a
            href="#"
            style={{
              fontWeight: 'bold',
              color: '#a4a4a4'
            }}
          >
            {project_name}
          </a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Write</a>
        </li>
        <li>
          <a href="#">Journals</a>
        </li>
        <li>
          <img
            src={profile_picture}
            alt="ProfilePicture"
            className="profile_picture"
          />
        </li>
        <li>
          <SignOut />
        </li>
      </ul>
    </header>
  );
}

function SignOut() {
  return (
    <button
      onClick={() => auth.signOut()}
      type="button"
      className="btn btn-outline-danger"
    >
      Sign-Out
    </button>
  );
}

function SignIn() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  const signingIn = <button onClick={signInWithGoogle}>Sign-In</button>;
  const signingOut = <button onClick={() => auth.signOut()}>Sign-Out</button>;
  return user ? signingOut : signingIn;
}
