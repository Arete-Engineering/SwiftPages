import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const DocumentView = () => {
  const { id } = useParams();
  const [documentData, setDocumentData] = useState(null);
  const navigate = useNavigate();

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

  const handleReturn = () => {
    if (navigate(-1)) {
      navigate(-1);
    } else {
      navigate("/home");
    }
  }

  return (
    <div>
      {documentData ? (
        <>
          <h1 style={{ marginTop: "30px" }}>{documentData.documentTitle}</h1>
          <div
            className="documentView"
            style={{ marginRight: "10%", marginLeft: "10%" }}
            dangerouslySetInnerHTML={{ __html: documentData.content }}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <a style={{ padding: "5%", color: "blue", textDecoration: "underline" }} onClick={handleReturn}>Return</a>
    </div>
  );
};

export default DocumentView;
