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
    <div className="App">
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