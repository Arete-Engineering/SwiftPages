import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Board() {
  const handleSaveClick = () => {
    console.log("Save clicked!");
  };

  const handleCloseClick = () => {
    console.log("Close clicked!");
  };

  const handleDeleteClick = () => {
    const comfirmDelete = window.confirm("Are you sure you want to delete?");
    if (comfirmDelete) {
      console.log("Delete clicked!");
    }
  };

  return (
    <div
      style={{ backgroundColor: "white", borderBottom: "2px solid #F1F4F7" }}
    >
      <ul>
        <a
          className="btn btn-light mr-4 mt-1 mb-1 btn-sm"
          style={{
            width: "14%",
            border: "1px solid #F1F4F7",
            color: "#364C57",
          }}
          onClick={handleSaveClick}
        >
          Publish
        </a>
        <a
          href="/home"
          className="btn btn-light mr-4 mt-1 mb-1 btn-sm"
          style={{
            marginLeft: "20px",
            width: "14%",
            border: "1px solid #F1F4F7",
            color: "#364C57",
          }}
          onClick={handleCloseClick}
        >
          Close
        </a>
        <a
          className="btn btn-light mt-1 mb-1 btn-sm"
          style={{
            marginLeft: "20px",
            width: "14%",
            border: "1px solid #F1F4F7",
            color: "#364C57",
          }}
          onClick={handleDeleteClick}
        >
          Delete
        </a>
      </ul>
    </div>
  );
}
