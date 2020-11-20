import React from "react";
import useHover from "./hooks/useHover";
import Background from './assets/Mikah Sax.jpg'
export const LandingPage = () => {
  const [hoverRefMusic, isHoveredMusic] = useHover();
  const [hoverRefCreations, isHoveredCreations] = useHover();

  return (
    <div
      className="Landing-page-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "0",
        margin: "0",
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Background})`,
        overflow: 'hidden'
      }}
    >
      <img src={Background} style={{opacity: '70%', height: '120%'}} alt="background" />
      <div
        className="Landing-text"
        style={{
          position: "absolute",
          alignSelf: "center",
          justifySelf: "center",
          justifyContent: "center",
          padding: "2rem",
          margin: "2rem",
        }}
      >
        <h1
          style={{
            width: "100%",
            fontSize: "6vw",
            justifySelf: "center",
            textDecoration: "bold",
            padding: "20px",
            fontFamily: 'PoetsenOne'
          }}
        >
          Mikah Feldman-Stein
        </h1>
        <div>
          <h3
            ref={hoverRefMusic}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              textDecoration: isHoveredMusic ? "underline" : "none",
            }}
          >
            <a
              href="#music"
              style={{
                fontSize: "3.5vw",
                color: "white",
              }}
            >
              Music
            </a>
          </h3>
        </div>
        <br />
        <div>
          <h3
            ref={hoverRefCreations}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              textDecoration: isHoveredCreations ? "underline" : "none",
            }}
          >
            <a
              href="#creations"
              style={{
                fontSize: "3.5vw",
                color: "white",
              }}
            >
              Creations
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
