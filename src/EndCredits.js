import React, { useState, useRef, useEffect } from "react";
import "./EndCredits.css";

const EndCredits = () => {
  const [crazyMode, setCrazyMode] = useState(false);
  const audioRef = useRef(null);

  // Optional: Add event listener to replay audio when it ends (redundant with loop attribute)
  useEffect(() => {
    const audioEl = audioRef.current;
    const handleEnded = () => {
      audioEl.play().catch(err => console.error("Play failed:", err));
    };
    audioEl.addEventListener("ended", handleEnded);
    return () => {
      audioEl.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handleCrazyToggle = () => {
    const newMode = !crazyMode;
    setCrazyMode(newMode);

    if (newMode) {
      audioRef.current.play().catch(err => console.error("Audio play failed:", err));
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className={`page-container ${crazyMode ? "crazy" : ""}`}>
      <header className="top-nav">
        <nav className="nav-links">
          <span>Home / Birthday / Credits</span>
        </nav>
        <div className="toggles">
          <div className="toggle">
            <span>Party Mode:</span>
            <button onClick={handleCrazyToggle} className="togglebut">
              {crazyMode ? "ON" : "OFF"}
            </button>
          </div>
        </div>
        <div className="agency-info">
          <span>B0SS May Agency ©2025 LOL!</span>
        </div>
      </header>

      {/* Audio element with loop */}
      <audio ref={audioRef} src="sounds/ClubClassics.mp3" loop />

      <main className="main-content">
        <img
          src="images/cake.png"
          alt="Cake"
          className={`cake-image ${crazyMode ? "fast-pop" : ""}`}
        />
      </main>

      <footer className="credits-section">
        <h1 className="main-title">BRAT CREDITS</h1>
        <div className="project-info">
          <p>@ B0SS May</p>
          <p>B0SS May Agency — 2025</p>
          <p>Website by B0SS May Agency</p>
          <p>Special thanks to Aparna a.k.a MONA LISA for helping me in</p>
          <p>Editing pictures & stealing Angel's pics from SNS</p>
          <p>User testing and themes recommendations</p>
          <p>AND HEARTLY THANKS TO CHATGPT for solving my queries</p>
        </div>
      </footer>
    </div>
  );
};

export default EndCredits;
