import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import logo from "./logo.svg";
import casette from "./Casette.png";
import cd from "./CD.png";
import hbd from "./NAYEON_HBD.mp3";

const Cdplayer = forwardRef(({ pageActive }, ref) => {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(new Audio(hbd));

  // Expose a pauseAudio method to the parent
  useImperativeHandle(ref, () => ({
    pauseAudio: () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsActive(false);
    }
  }));

  // Loop playback effect remains as-is
  useEffect(() => {
    const handleAudioEnd = () => {
      if (isActive) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    };

    const audio = audioRef.current;
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [isActive]);

  // Optional: also listen for pageActive changes if needed
  useEffect(() => {
    if (!pageActive) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsActive(false);
    }
  }, [pageActive]);

  const handleClick = () => {
    setIsActive((prev) => {
      const newActive = !prev;
      if (newActive) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      return newActive;
    });
  };

  return (
    <div className="cardcas">
      <img onClick={handleClick} className="casette" src={casette} alt="Casette" />
      <img
        className={isActive ? "App-logo" : "cd"}
        src={cd}
        style={{ cursor: "pointer" }}
        alt="CD"
      />
      <img className="hand" src="images/hand.png" alt="Hand" />
    </div>
  );
});

export default Cdplayer;
