import React, { useState, useRef } from "react";
import "./ObjectsOfBirthday.css";


const HoverImage = ({ src, alt, style }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="hover-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={imgRef}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        className={`hover-image ${isHovered ? "hovered" : ""}`}
      />
    </div>
  );
};

const ObjectsOfBirthday = () => {
  // List of images that react to hover
  const interactiveImages = [
    {
      src: "images/GingerCat.png",
      alt: "Object 1",
      style: {
        top: "65vh",
        left: "12vw",
        width: "16vw",
        height: "35vh",
        zIndex: 2,
      },
    },
    {
      src: "images/space-02.png",
      alt: "Object 2",
      style: {
        top: "1vh",
        left: "35vw",
        width: "6vw",
        height: "10vh",
        zIndex: 5,
      },
    },
    {
      src: "images/space-03.png",
      alt: "Object 3",
      style: {
        top: "70vh",
        left: "66vw",
        width: "12vw",
        height: "25vh",
        zIndex: 5,
      },
    },
    {
      src: "images/BlueRibbon.png",
      alt: "Object 4",
      style: {
        top: "2vh",
        left: "82vw",
        width: "11vw",
        height: "15vh",
        zIndex: 5,
        transform: "rotate(45deg)"
      },
    },
    {
      src: "images/Camera.png",
      alt: "Object 5",
      style: {
        top: "5vh",
        left: "36vw",
        width: "22vw",
        height: "24vh",
        zIndex: 3,
        transform: "rotate(-19deg)",
      },
    },
    {
      src: "images/Escalator.png",
      alt: "Object 6",
      style: {
        top: "20vh",
        left: "-49vw",
        width: "95vw",
        height: "80vh",
        zIndex: 0,
      },
    },
    {
      src: "images/Flower.png",
      alt: "Object 7",
      style: {
        top: "30vh",
        left: "27vw",
        width: "15vw",
        height: "60vh",
        zIndex: 0,
      },
    },
    {
      src: "images/GlassPaw.png",
      alt: "Object 8",
      style: {
        top: "8vh",
        left: "15vw",
        width: "10vw",
        height: "18vh",
        zIndex: 4,
        transform: "rotate(14deg)",
      },
    },
    {
      src: "images/GreenPup.png",
      alt: "Object 9",
      style: {
        top: "70vh",
        left: "-3vw",
        width: "11vw",
        height: "19vh",
        zIndex: 3,
      },
    },
    {
      src: "images/GreenTurtle.png",
      alt: "Object 10",
      style: {
        top: "20vh",
        left: "29vw",
        width: "8vw",
        height: "15vh",
        zIndex: 4,
      },
    },
    {
      src: "images/Bandage.png",
      alt: "Object 11",
      style: {
        top: "18vh",
        left: "78vw",
        width: "17vw",
        height: "20vh",
        zIndex: 3,
        transform: "rotate(30deg)"
      },
    },
    {
      src: "images/OrangeCoral.png",
      alt: "Object 12",
      style: {
        top: "-2vh",
        left: "13vw",
        width: "30vw",
        height: "65vh",
        zIndex: 1,
        transform: "rotate(23deg)",
      },
    },
    {
      src: "images/OrangeStarfish.png",
      alt: "Object 13",
      style: {
        top: "66vh",
        left: "47vw",
        width: "19vw",
        height: "34vh",
        zIndex: 4,
        transform: "rotate(-10deg)",
      },
    },
    {
      src: "images/PinkArrow.png",
      alt: "Object 14",
      style: {
        top: "74vh",
        left: "82vw",
        width: "12vw",
        height: "26vh",
        zIndex: 4,
        transform: "rotate(-50deg)"
      },
    },
    {
      src: "images/Reel.png",
      alt: "Object 15",
      style: {
        top: "20vh",
        left: "44vw",
        width: "14vw",
        height: "65vh",
        zIndex: 3,
        transform: "rotate(12deg)",
      },
    },
    {
      src: "images/Shell.png",
      alt: "Object 16",
      style: {
        top: "1vh",
        left: "-7vw",
        width: "13vw",
        height: "24vh",
        zIndex: 4,
        transform: "rotate(-20deg)",
      },
    },
    {
      src: "images/space-04.png", //star peach
      alt: "Object 17",
      style: {
        top: "85vh",
        left: "59vw",
        width: "12vw",
        height: "22vh",
        zIndex: 5,
      },
    },
    {
      src: "images/blueberry.png",   //blueberry
      alt: "Object 18",
      style: {
        top: "2vh",
        left: "60vw",
        width: "8vw",
        height: "14vh",
        zIndex: 3,
      },
    },
    {
      src: "images/Teddy.png",
      alt: "Object 19",
      style: {
        top: "83vh",
        left: "29vw",
        width: "6vw",
        height: "13vh",
        zIndex: 5,
        transform: "rotate(40deg)",
      },
    },
    {
      src: "images/Telephone.png",
      alt: "Object 20",
      style: {
        top: "-1vh",
        left: "52vw",
        width: "38vw",
        height: "38vh",
        zIndex: 1,
      },
    },
    {
      src: "images/Toffy.png",
      alt: "Object 21",
      style: {
        top: "42vh",
        left: "40vw",
        width: "10vw",
        height: "15vh",
        zIndex: 4,
      },
    },
    {
      src: "images/Tulips.png",
      alt: "Object 22",
      style: {
        top: "62vh",
        left: "32vw",
        width: "16vw",
        height: "45vh",
        zIndex: 3,
      },
    },
    {
      src: "images/Starfish.png",
      alt: "Object 14",
      style: {
        top: "3vh",
        left: "-10vw",
        width: "35vw",
        height: "66vh",
        zIndex: 3,

      },
    },
  ];

  // List of static images (No hover effect)
  const staticImages = [
    {
      src: "images/A2.png",
      alt: "Background Image",
      style: { top: "51vh", left: "-2vw", width: "10vw", height: "20vh", zIndex: 5 },
    },
    {
      src: "images/N2.png",
      alt: "Decoration",
      style: { top: "50vh", left: "6vw", width: "14vw", height: "30vh", zIndex: 5 },
    },
    {
      src: "images/G2.png",
      alt: "Background Image",
      style: { top: "51vh", left: "18.5vw", width: "7vw", height: "15vh", zIndex: 5 },
    },
    {
      src: "images/E2.png",
      alt: "Decoration",
      style: { top: "64vh", left: "18.5vw", width: "7vw", height: "15vh", zIndex: 5 },
    },
    {
      src: "images/L2.png",
      alt: "Decoration",
      style: { top: "50vh", left: "24vw", width: "13vw", height: "30vh", zIndex: 5 },
    },
    {
      src: "images/B.png",
      alt: "Decoration",
      style: { top: "36vh", left: "0vw", width: "6vw", height: "14vh", zIndex: 5  },
    },
    {
      src: "images/I.png",
      alt: "Decoration",
      style: { top: "36vh", left: "5vw", width: "5vw", height: "14vh", zIndex: 5 },
    },
    {
      src: "images/R.png",
      alt: "Decoration",
      style: { top: "36vh", left: "9.5vw", width: "6vw", height: "14vh", zIndex: 5 },
    },
    {
      src: "images/T.png",
      alt: "Decoration",
      style: { top: "36vh", left: "14.5vw", width: "6vw", height: "14vh", zIndex: 5 },
    },
    {
      src: "images/H2.png",
      alt: "Decoration",
      style: { top: "36vh", left: "20vw", width: "6vw", height: "14vh", zIndex: 5 },
    },
    {
      src: "images/D2.png",
      alt: "Decoration",
      style: { top: "36vh", left: "26vw", width: "6vw", height: "14vh", zIndex: 5 },
    },
    {
      src: "images/A.png",
      alt: "Decoration",
      style: { top: "36.5vh", left: "31.5vw", width: "6vw", height: "13vh", zIndex: 5 },
    },
    {
      src: "images/Y.png",
      alt: "Decoration",
      style: { top: "36vh", left: "36vw", width: "6vw", height: "14vh", zIndex: 5 },
    },
    {
      src: "images/H1.png",
      alt: "Decoration",
      style: { top: "21vh", left: "0vw", width: "6vw", height: "14vh", zIndex: 5  },
    },
    {
      src: "images/A1.png",
      alt: "Decoration",
      style: { top: "21vh", left: "5.8vw", width: "6vw", height: "14vh", zIndex: 5  },
    },
    {
      src: "images/P1.png",
      alt: "Decoration",
      style: { top: "21vh", left: "11.1vw", width: "6vw", height: "14vh", zIndex: 5  },
    },
    {
      src: "images/P1.png",
      alt: "Decoration",
      style: {top: "21vh", left: "16.3vw", width: "6vw", height: "14vh", zIndex: 5   },
    },
    {
      src: "images/Y1.png",
      alt: "Decoration",
      style: { top: "21vh", left: "21.4vw", width: "6vw", height: "14vh", zIndex: 5  },
    },
  ];

  return (
    <div className="container">
      {/* Render static images */}
      {staticImages.map((image, index) => (
        <img
          key={`static-${index}`}
          src={image.src}
          alt={image.alt}
          className="staticimage"
          style={{
            position: "absolute",
            width: image.style.width,
            height: image.style.height,
            top: image.style.top,
            left: image.style.left,
            zIndex: image.style.zIndex,
            transform: image.style.transform || "none",
          }}
        />
      ))}

      {/* Render interactive (hover effect) images */}
      {interactiveImages.map((image, index) => (
        <div
        key={index}
        className={`hover-container`} // Add the class here
        style={{
          top: image.style.top,
          left: image.style.left,
          zIndex: image.style.zIndex,
        }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="hover-image"
          style={{
            width: image.style.width,
            height: image.style.height,
            objectFit: "contain",
            transform: image.style.transform || "none",
          }}
        />
      </div>
      ))}
    </div>
  );
};

export default ObjectsOfBirthday;
