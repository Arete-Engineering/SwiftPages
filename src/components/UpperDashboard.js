import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import DocumentList from "./DocumentList";

export default function UpperDashboard() {
  const userName = firebase.auth().currentUser?.displayName;
  const userID = firebase.auth().currentUser?.uid;
  const pfp = firebase.auth().currentUser?.photoURL;

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
      <img src={pfp} style={{borderRadius: "100%", width: "3em", height: "3em", marginRight: "1em", verticalAlign: "middle"}}/> Welcome, {userName}.
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
