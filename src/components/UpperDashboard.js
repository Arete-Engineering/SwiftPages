import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function UpperDashboard() {
  const userName = firebase.auth().currentUser?.displayName;
  return (
    <>
      <h4
        className=""
        style={{ padding: "5%", paddingTop: "10%", textAlign: "left" }}
      >
        Welcome back, {userName}
      </h4>
    </>
  );
}
