import "./styles.css";
import Editor from "./Editor";
import Header from "./Header";
import Save from "./Save";
import SignIn from "./SignIn";
import Board from "./Board"

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const auth = firebase.auth();

export default function App() {
  const [ user ] = useAuthState(auth);
  return (
    document.body.style = 'background: #0D1117',
    <div className="App" style={{ backgroundColor: '#0D1117'}}>
      {user === null ? <SignIn /> : (
        <>
          <Header />
          <Board />
        </>
      )}
    </div>
  );
}
