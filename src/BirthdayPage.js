import React, { useRef, useState } from "react";
import Cdplayer from "./cdplayer.js";
import ObjectsOfBirthday from "./ObjectsBirthday.js";
import NotePopup from "./NotePopup";
// import instructionImage from "./.png";

const BirthdayPage = () => {
  const [pageActive, setPageActive] = useState(true);
  const cdPlayerRef = useRef(null);

  // This function is called when you navigate away
  const handleNavigation = () => {
    // Immediately pause the audio using the exposed method
    if (cdPlayerRef.current) {
      cdPlayerRef.current.pauseAudio();
    }
    setPageActive(false);
    // Add your additional navigation logic here
  };

  const [isNoteOpen, setIsNoteOpen] = useState(true);

  return (
    <div className="birthdayPage background">
      
      
      
      <ObjectsOfBirthday onNavigate={handleNavigation} />
      <Cdplayer ref={cdPlayerRef} pageActive={pageActive} />
      {isNoteOpen && (
        <NotePopup 
          isOpen={isNoteOpen} 
          onClose={() => setIsNoteOpen(false)} 
           rightImageSrc="images/Banner1.png"
          leftImageSrc="images/LeftBanner.png"
          />
      )}
    </div>
  );
};

export default BirthdayPage;
