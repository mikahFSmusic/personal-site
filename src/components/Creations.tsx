import React from "react"
import Container from "react-bootstrap/Container"
import { MDBCard, MDBCardImage, MDBCardBody } from "mdbreact"
import { Link } from 'react-router-dom'
import AmperLogo from "./assets/Amper Logo.svg"
import UncannyValleyArt from './assets/uncanny_valley.png'
export const Creations = () => {
  return (
    <div
      id="creations"
      className="Creations-page-container"
      style={{
        width: "100vw",
        minHeight: '100vh',
        padding: "20px",
        overflow: "scroll",
        backgroundColor: "#f6b1e2",
        scrollBehavior: "unset",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "64px" }}>Creations!</h1>
      <br />
      <Container
        className="Creations-content-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        {/* Amper Card */}
        <MDBCard
          style={{
            width: "15rem",
            height: "18rem",
            padding: "10px",
            color: "black",
            justifyContent: "center",
          }}
        >
          <MDBCardImage className="img-fluid" src={AmperLogo} waves top />
          <MDBCardBody>
            Built algorithms/lua libraries for realistic human performance by
            Amper's AI! Check it out/demo amper
            <a href="https://www.ampermusic.com/"> here</a>!
            <br />
            (Sign Up Required)
          </MDBCardBody>
        </MDBCard>

        {/* Uncanny Valley Cover Image Card */}
        <MDBCard
          style={{
            maxWidth: "30rem",
            padding: "10px",
            color: "black",
            justifyContent: "center",
          }}
        >
          <MDBCardImage className="img-fluid" src={UncannyValleyArt} hover waves top />
          <MDBCardBody>
            Art created with custom built 3D software in OpenGL. It takes an input image and converts it to a 3D object!
            A web version is under development, and I hope to share it with you soon :)
          </MDBCardBody>
        </MDBCard>
        <div style={{width: "100%", height: '3rem'}}></div>
        <h2>Plenty of things in the works. Check back soon for more, or <a href=""><Link to="/resume">check out my resume</Link></a></h2>
      </Container>
    </div>
  );
};
