import "./styles.css";
import Editor from "./Editor";
import Header from "./Header";
import Save from "./Save";
import SignIn from "./SignIn";
import Board from "./Board";
import { useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

export default function App() {
  const [user] = useAuthState(auth);
  const [showHeader, setShowHeader] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("black");
  document.body.style = `background: ${backgroundColor}`

  const handleButtonClick = () => {
    if (showHeader) {
      setShowHeader(false);
      setShowEditor(true);
      setBackgroundColor("white");
      document.body.style = `background: white`
      
    } else {
      setShowHeader(true);
      setShowEditor(false);
      setBackgroundColor("black");
      document.body.style = `background: black`
    }
  };

  return (
    <>
      <div className="App" style={{ backgroundColor: backgroundColor }}>
        {user === null ? <SignIn /> : (
          <>
            {showHeader && <Header />}
            {showEditor && <Editor />}
            <button className="btn btn-success mt-4" onClick={handleButtonClick}>Start Writing</button>
          </>
        )}
      </div>
    </>
  );
};