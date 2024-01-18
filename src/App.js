import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";

//Pages Import
import Home from "./pages/Home";
import TextEditor from "./pages/TextEditor";
import SignIn from "./pages/SignIn";
import Explore from "./pages/Explore";
import Journal from "./pages/Journal";

//Firebase Import
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

export default function App() {
  const [user, loading] = useAuthState(auth);
  const [backgroundColor, setBackgroundColor] = useState("black");
  document.body.style = `background: ${backgroundColor}`;

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="App" style={{ backgroundColor: backgroundColor }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/sign-in"
              element={user === null ? <SignIn /> : <Navigate to="/home" />}
            />
            <Route
              path="/editor"
              element={
                user !== null ? <TextEditor /> : <Navigate to="/sign-in" />
              }
            />
            <Route
              path="/home"
              element={user !== null ? <Home /> : <Navigate to="/sign-in" />}
            />
            <Route
              path="/explore"
              element={user !== null ? <Explore /> : <Navigate to="/sign-in" />}
            />
            <Route
              path="/journal"
              element={user !== null ? <Journal /> : <Navigate to="/sign-in" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
