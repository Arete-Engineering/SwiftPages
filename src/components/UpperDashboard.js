import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import DocumentList from "./DocumentList";

export default function UpperDashboard() {
  const userName = firebase.auth().currentUser?.displayName;
  const userID = firebase.auth().currentUser?.uid;

  return (
    <div style={{ borderBottom: "1px solid #cdd1da", minHeight: "20px" }}>
      <div
        class="alert alert-light"
        role="alert"
        style={{ borderRadius: "0px" }}
      >
        SwiftPages is still in early development, everything is subject to
        change. 🙃
      </div>
      <h4 className="welcome" style={{ display: "flex", alignItems: "center" }}>
        Welcome, {userName}.
        {/* <div style={{ marginLeft: "auto", marginBottom: "5%" }}>
          <a className="btn btn-secondary btn-sm" href="/editor">
            Create New Page
          </a>SwiftPages
        </div> */}
      </h4>
      {userID && <DocumentList userID={userID} />}
    </div>
  );
}
