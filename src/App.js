import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";

// Pages Import
import Home from "./pages/Home";
import TextEditor from "./pages/TextEditor";
import SignIn from "./pages/SignIn";
import Document from "./pages/Document";
import Journal from "./pages/Journal";
import DocumentView from "./components/DocumentView"; // Import DocumentView component

// Firebase Import
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

export default function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return null;
  }

  return (
    <>
      <div className="App">
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
  path="/Document/*"
  element={
    user !== null ? (
      <Routes>
        <Route path="/" element={<Document />} />
        <Route path=":id" element={<DocumentView />} />
      </Routes>
    ) : (
      <Navigate to="/sign-in" />
    )
  }
/>
            <Route
              path="/journal"
              element={user !== null ? <Journal /> : <Navigate to="/sign-in" />}
            />
            <Route
              path="/"
              element={user !== null ? <Home /> : <Navigate to="/sign-in" />}
            />
            <Route
              path="*"
              element={user !== null ? <Home /> : <Navigate to="/sign-in" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
