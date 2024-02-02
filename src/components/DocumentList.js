import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const DocumentList = ({ userID }) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const db = firebase.firestore();
      const querySnapshot = await db
        .collection("editorContent")
        .where("userID", "==", userID)
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
      {documents.length === 0 ? (
        <p>No documents found. Start writing.</p>
      ) : (
        <div className="documentList">
          <h4>Your Documents:</h4>
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
      )}

    </div>
  );
};

export default DocumentList;
