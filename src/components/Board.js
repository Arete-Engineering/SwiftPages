import React, { useState } from "react";
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

  return (
    <div className="mt-4">
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
  );
}
