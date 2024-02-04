import "../styles.css";
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

let project_name = "SwiftPages";

export default function Header() {
  const [user] = useAuthState(auth);
  const profile_picture = user ? user.photoURL : "Profile Picture Null";
  const userID = user ? user.uid : null;

  return (
    <header className="App_header" style={{ backgroundColor: "#FFFFFF" }}>
      <ul>
        <li>
          <a
            href="/home"
            style={{
              fontWeight: "bold",
              color: "#223037",
            }}
          >
            {project_name}
          </a>
        </li>
        {/* <li>
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Search"
            aria-label=".form-control-sm example"
          ></input>
        </li> */}
        <li>
          <a href="/community" className="menuItem">Explore</a>
        </li>
        <li>
          <a href="/editor" className="menuItem">Create</a>
        </li>
        <li>
          <a href="/pages" className="menuItem">My Pages</a>
        </li>
        <li>
          <a href={`/profile/${userID}`} className="menuItem">
            <img
              src={profile_picture}
              alt="ProfilePicture"
              className="profile_picture"
            />
          </a>
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
      className="btn btn-dark btn-sm"
    >
      Sign-Out
    </button>
  );
}
