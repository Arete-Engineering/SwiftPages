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
        // .where("userID", "==", userID)
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
      <h2>Documents:</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            {/* Use Link to navigate to DocumentView page */}
            <Link to={`/document/${document.id}`}>
              {document.documentTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Directory;
