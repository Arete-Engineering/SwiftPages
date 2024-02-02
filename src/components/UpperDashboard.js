import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import DocumentList from "./DocumentList";

export default function UpperDashboard() {
  const userName = firebase.auth().currentUser?.displayName;
  const userID = firebase.auth().currentUser?.uid;
  
  return (
    <>
      <h4
        className=""
        style={{ padding: "5%", paddingTop: "10%", textAlign: "left" }}
      >
        Welcome back, {userName}
      </h4>
      {userID && <DocumentList userID={userID} />}
    </>
  );
}
