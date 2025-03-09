import React from "react";
import "./NotePopup.css"; // Import styles

const NotePopup = ({ isOpen, onClose, rightImageSrc, leftImageSrc }) => {
  return (
    <div className={`overlay ${isOpen ? "show" : ""}`}>
      {/* Left Note */}
      <div className={`note-container left ${isOpen ? "slide-in-left" : "slide-out-left"}`}>
        <img src={leftImageSrc} alt="Left Note" className="note-image" />
      </div>

      {/* Right Note */}
      <div className={`note-container right ${isOpen ? "slide-in-right" : "slide-out-right"}`}>
        <img src={rightImageSrc} alt="Right Note" className="note-image" />
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default NotePopup;
