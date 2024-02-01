import React from "react";
import firebase from "firebase/compat/app";  // Ensure you are using the correct import path
import "firebase/compat/auth"; // Import additional Firebase modules as needed
import "firebase/compat/firestore";
import Header from "../components/Header";
import DocumentList from "../components/DocumentList";

export default function Explore() {
  const userID = firebase.auth().currentUser?.uid;

  return (
    <>
      <Header />
      {userID && <DocumentList userID={userID} />}
    </>
  );
}
