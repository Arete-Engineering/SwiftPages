import React, { useState } from "react";
import Editor from "./Editor";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Board() {
  const [showEditor, setShowEditor] = useState(false);

  const handleSaveClick = () => {
    console.log("Save clicked!");
  };

  const handleCloseClick = () => {
    setShowEditor(false);
  };

  const handleDeleteClick = () => {
    const comfirmDelete = window.confirm("Are you sure you want to delete?");
    if (comfirmDelete) {
      setShowEditor(false);
    }
  };

  const handleToggleEditor = () => {
    setShowEditor(!showEditor);
  };

  return (
    <div className="mt-4">
      {showEditor ? (
        <div>
          <Editor />
          <button
            className="btn btn-outline-success mr-4"
            style={{ width: "14%" }}
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            className="btn btn-outline-warning mr-4"
            style={{ marginLeft: "20px", width: "14%" }}
            onClick={handleCloseClick}
          >
            Exit
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ marginLeft: "20px", width: "14%" }}
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      ) : (
        <>
          <h1 className="mb-4">Your journal, your memories.</h1>
          <button className="btn btn-success mt-4" onClick={handleToggleEditor}>
            Start Writing
          </button>
        </>
      )}
    </div>
  );
}