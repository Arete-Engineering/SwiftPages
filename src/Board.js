import React, { useState } from "react";
import Editor from "./Editor";

export default function Board() {
  const [showEditor, setShowEditor] = useState(false);

  const handleSaveClick = () => {
    console.log("Save clicked!");
  };

  const handleCloseClick = () => {
    setShowEditor(false);
  };

  const handleToggleEditor = () => {
    setShowEditor(!showEditor);
  };

  return (
    <div>
      <button onClick={handleToggleEditor}>Toggle Editor</button>
      {showEditor && (
        <div>
          <Editor />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCloseClick}>X</button>
        </div>
      )}
    </div>
  );
}