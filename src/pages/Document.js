import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Header from "../components/Header";
import DocumentList from "../components/DocumentList";

export default function Document () {
  const userID = firebase.auth().currentUser?.uid;

  return (
    <>
      <Header />
      {userID && <DocumentList userID={userID} />}
    </>
  );
}
