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
  };

  return (
    <div>
      {documentData ? (
        <>
          <h1 style={{ marginTop: "30px", fontWeight: "bold" }}>
            {documentData.documentTitle}
          </h1>
          <div
            className="documentView"
            style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}
            dangerouslySetInnerHTML={{ __html: documentData.content }}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <a
        style={{ padding: "5%", color: "blue", textDecoration: "underline" }}
        onClick={handleReturn}
      >
        Return a page
      </a>

      <style>
        {`
          @media (max-width: 600px) {
            .documentView img {
              max-width: 100%;
              height: auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DocumentView;
