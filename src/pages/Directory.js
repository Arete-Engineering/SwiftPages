import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Header from "../components/Header";

const Directory = ({ userID }) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const db = firebase.firestore();
      const querySnapshot = await db
        .collection("editorContent")
        .get();

      const documentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDocuments(documentsData);
    };

    fetchDocuments();
  }, [userID]);

  return (
    <div>
      <Header />
      <div className="documentList">
        <h4 style={{marginBottom: "3%", paddingBottom: "black"}}>All Posts</h4>
        <ul>
          {documents.map((document) => (
            <div className="post">
              <li key={document.id}>
                <Link to={`/document/${document.id}`}>
                  {document.documentTitle}
                </Link>
                <p>By: Author Name</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Directory;
