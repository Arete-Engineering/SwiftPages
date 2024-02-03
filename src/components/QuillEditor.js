import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import "firebase/compat/firestore"; 
import firebase from "firebase/compat/app"; 
import firebaseConfig from "./firebaseConfig"; 

const QuillEditor = () => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const [documentTitle, setDocumentTitle] = useState("");

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });
    }
  }, []);

  const saveToFirebase = () => {
    const content = quillInstance.current?.root.innerHTML;
    const userID = firebase.auth().currentUser.uid;

    if (content && documentTitle.trim() !== "") {
      const db = firebase.firestore();
      const editorContentRef = db.collection("editorContent").doc();

      editorContentRef
        .set({
          userID,
          documentTitle,
          content,
        })
        .then(() => {
          console.log("Content saved to Firebase successfully");
          window.location.href = "/home";
        })
        .catch((error) => {
          console.error("Error saving content to Firebase:", error);
        });
    } else {
      console.warn("Content or document title is empty. Nothing to save.");
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Document Title"
        aria-label="Document Title"
        value={documentTitle}
        onChange={(e) => setDocumentTitle(e.target.value)}
      />
      <div ref={editorRef} />
      <button
        className="btn btn-light btn-sm"
        style={{ marginTop: "2%", backgroundColor: "#0064e0", color: "white" }}
        onClick={saveToFirebase}
      >
        Save to Firebase
      </button>
      <a
        className="btn btn-light btn-sm"
        style={{ marginTop: "2%", backgroundColor: "#0064e0", color: "white" }}
        href="/home"
      >
        Go Home
      </a>
    </div>
  );
};

export default QuillEditor;
