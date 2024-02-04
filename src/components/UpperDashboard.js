import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import DocumentList from "./DocumentList";

export default function UpperDashboard() {
  const userName = firebase.auth().currentUser?.displayName;
  const userID = firebase.auth().currentUser?.uid;

  return (
    <>
      <div
        class="alert alert-primary"
        role="alert"
        style={{ borderRadius: "0px" }}
      >
        SwiftPages is still in early development, everything is subject to
        change.
      </div>
      <h4 className="welcome">Welcome, {userName}.</h4>
      {userID && <DocumentList userID={userID} />}
    </>
  );
}
