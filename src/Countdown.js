import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import waiter from "./waiter.png";
import angel1 from "./angel-01.png";
import paper from "./wrappedPaper.png";
import paper2 from "./paper2.png";
import cake1 from "./Cake1.png";
import cake2 from "./Cake2.png";
import cake3 from "./Cake3.png";

import bluecake1 from "./images/blueberrycake.png";
import bluecake2 from "./images/blueberrypie1.png";
import bluecake3 from "./images/blueberrypie2.png";
import bluecake4 from "./images/blueberrypie3.png";
import chocake from "./images/chococake.png";
import quasant from "./images/quassant.png";
import rasbpie from "./images/rasberrypie.png";
import redcake from "./images/redcake.png";
import strawberrypie from "./images/strawberrypie.png";
import cake5 from './images/cake.png';

const Countdown = () => {
  const navigate = useNavigate();
  const targetDate = new Date("2025-03-10T23:11:11+05:30").getTime(); // IST time

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [titleVariations, setTitleVariations] = useState({});

  useEffect(() => {
    if (timeLeft.total <= 0) {
      navigate("/happy-birthday"); // Redirect AFTER countdown reaches 0
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  // Function to return image paths for title letters, spaces, and apostrophes
  const getTitleImage = (letter) => {
    if (letter === " ") {
      return `/images/space-${String(
        Math.floor(Math.random() * 10) + 1
      ).padStart(2, "0")}.png`;
    }
    const letterFormatted = letter === "'" ? "comma" : letter;
    return `/images/${letterFormatted}-01.png`;
  };

  const line1 = " YOU ARE CORDIALLY INVITED TO CELEBRATE ".split("");
  const line2 = " ANGEL'S BIRTHDAY PARTY ".split("");

  const renderTitleAsImages = () => (
    <div className="flex flex-col justify-center items-center mb-5">
      <div className="flex space-x-2 mb-2">
        {line1.map((letter, index) => (
          <img
            key={index}
            src={getTitleImage(letter)}
            alt={letter}
            style={{ width: "28px", height: "55px", objectFit: "contain" }}
          />
        ))}
      </div>
      <div className="flex space-x-2">
        {line2.map((letter, index) => (
          <img
            key={index}
            src={getTitleImage(letter)}
            alt={letter}
            style={{ width: "35px", height: "60px", objectFit: "contain" }}
          />
        ))}
      </div>
    </div>
  );

  const sideImages = () => (
    <>
    <img className="cake1" src= {cake1}/>
    <img className="cake2" src = {cake2}/>
    <img className="cake3" src = {cake3} />
    <img className="paper1" src = {paper} />
    <img className="paper2" src = {paper2} />
    
    {/* <img className="blue-cake" src={bluecake1} /> */}
<img className="blue-pie1" src={bluecake2} />
<img className="blue-pie2" src={bluecake3} />
<img className="blue-pie3" src={bluecake4} />
<img className="choco-cake" src={chocake} />
<img className="croissant" src={quasant} />
<img className="raspberry-pie" src={rasbpie} />
<img className="red-cake" src={redcake} />
<img className="strawberry-pie" src={strawberrypie} />
<img className="cake5" src={cake5} />


      <img className="sideWaiter" src={waiter} />
      <img className="angel1" src={angel1} />
      
    </>
  );
  return (
    <div className="countdown text-right p-6">
      {renderTitleAsImages()}

      {timeLeft.total > 0 ? (
        <h2 className="timer">
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes{" "}
          {timeLeft.seconds} Seconds left
        </h2>
      ) : (
        <h2 className="text-4xl">Redirecting...</h2>
      )}
      {sideImages()}
    </div>
  );
};

export default Countdown;
