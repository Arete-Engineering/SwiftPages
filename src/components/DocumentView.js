import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Header from "./Header";

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
  };

  return (
    <><Header /><div style={{ fontFamily: "Arial, sans-serif", color: "#121212" }}>
      {documentData ? (
        <>
          <h1 style={{ marginTop: "30px", fontWeight: "bold", fontSize: "2.5rem" }}>
            {documentData.documentTitle}
          </h1>
          <div
            className="documentView"
            style={{ maxWidth: "800px", margin: "auto", padding: "20px", lineHeight: "1.6" }}
            dangerouslySetInnerHTML={{ __html: documentData.content }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <a
        style={{ padding: "5%", color: "blue", textDecoration: "underline", display: "block", textAlign: "center" }}
        onClick={handleReturn}
      >
        Return to Home
      </a>
    </div></>
  );
};

export default DocumentView;
