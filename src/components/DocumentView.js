import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const DocumentView = () => {
  const { id } = useParams();
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const db = firebase.firestore();
        const documentRef = await db.collection("editorContent").doc(id).get();

        if (documentRef.exists) {
          setDocumentData(documentRef.data());
        } else {
          console.log("Document not found");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
  }, [id]);

  return (
    <div>
      <h2>Document View</h2>
      {documentData ? (
        <>
          <h3>{documentData.documentTitle}</h3>
          <div dangerouslySetInnerHTML={{ __html: documentData.content }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DocumentView;