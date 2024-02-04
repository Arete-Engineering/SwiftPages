import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Header from "../components/Header";

const Directory = ({ userID }) => {
  const [documents, setDocuments] = useState([]);

  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>?/gm, "");
  };

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
        <h4 style={{marginBottom: "4%", paddingBottom: "black"}}>Community Pages 🌎</h4>
        <ul>
          {documents.map((document) => (
            <div className="post">
              <li key={document.id}>
                <Link to={`/pages/${document.id}`}>
                  <strong style={{color: "#0064e0", textDecoration: "underline"}}>{document.documentTitle}</strong>
                </Link>
                <p>{removeHtmlTags(document.content.substring(3, 170))}</p>
                <p>{document.author}<div style={{color: "#6b6b6b"}}>{document.date}</div></p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Directory;
