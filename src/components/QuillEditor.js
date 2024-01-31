import React, { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';
import 'firebase/compat/firestore'; // Updated import for Firestore
import firebase from 'firebase/compat/app'; // Use your Firebase import path
import firebaseConfig from './firebaseConfig'; // Update the path accordingly

const QuillEditor = () => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  const saveToFirebase = () => {
    const content = quillInstance.current?.root.innerHTML;

    if (content) {
      const db = firebase.firestore(); // Use firestore() instead of database()
      const editorContentRef = db.collection('editorContent').doc('documentId'); // Adjust the collection and document ID

      editorContentRef.set({
        content,
      })
      .then(() => {
        console.log('Content saved to Firebase successfully');
      })
      .catch((error) => {
        console.error('Error saving content to Firebase:', error);
      });
    } else {
      console.warn('Content is empty. Nothing to save.');
    }
  };

  return (
    <div>
      <div ref={editorRef} />
      <button onClick={saveToFirebase}>Save to Firebase</button>
    </div>
  );
};

export default QuillEditor;
