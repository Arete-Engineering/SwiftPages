import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const DocumentList = ({ userID }) => {
  const [documents, setDocuments] = useState([]);
  const db = firebase.firestore();

  const fetchDocuments = async () => {
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

  const handleDelete = (documentId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this page?");
    if (isConfirmed) {
      const documentRef = db.collection("editorContent").doc(documentId);

      documentRef.delete().then(() => {
        console.log("Document successfully deleted!");
        fetchDocuments();
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    } else {
      console.log("Deletion canceled");
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [userID]);

  return (
    <div>
      {documents.length === 0 ? (
        <p>No documents found. Start writing.</p>
      ) : (
        <div className="documentList">
          <h4>Created Pages</h4>
          <ul>
            {documents.map((document) => (
              <li key={document.id} style={{marginBottom: "4%"}}>
                <Link to={`/pages/${document.id}`}>
                  {document.documentTitle}
                </Link>
                <p>{document.content.substring(3, 170)}</p>
                <div>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleDelete(document.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-secondary btn-sm">Edit</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DocumentList;
