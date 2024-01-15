import "./styles.css";
import Editor from "./Editor";
import Header from "./Header";
import Save from "./Save";
import SignIn from "./SignIn";


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";


const auth = firebase.auth();

export default function App() {
  const [ user ] = useAuthState(auth);
  return (
    document.body.style = 'background: #1E1E1E',
    <div className="App" style={{ backgroundColor: '#1E1E1E'}}>
      {user === null ? <SignIn /> : (
        <>
          <Header />
          <Editor />
          <Save />
        </>
      )}
    </div>
  );
}
