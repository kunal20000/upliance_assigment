import React, { useState, useEffect } from "react";


const RichTextEditor = () => {
  const [content, setContent] = useState("");

  // Load saved content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Save content to localStorage on change
  const handleChange = (e) => {
    const newContent = e.target.innerHTML;
    setContent(newContent);
    localStorage.setItem("editorContent", newContent);
  };

  // Apply formatting commands
  const applyFormat = (format) => {
    document.execCommand(format);
  };

  return (
    <div className="editor-container">
      <div
        id="editor"
        contentEditable="true"
        onInput={handleChange}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {content === "" && (
        <div className="placeholder">Type something...</div>
      )}
      <div id="toolbar">
        <button onClick={() => applyFormat("bold")}>Bold</button>
        <button onClick={() => applyFormat("italic")}>Italic</button>
        <button onClick={() => applyFormat("underline")}>Underline</button>
        <button onClick={() => applyFormat("insertunorderedlist")}>
          Unordered List
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;