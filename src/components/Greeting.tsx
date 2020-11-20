import React from "react";

export const Greeting = () => {
  return (
    <div
      style={{
        width: "100vw",
        padding: "20px",
        overflow: "hidden",
        backgroundColor: "#ff9a8c",
      }}
    >
      <br />
      <h1 style={{ fontSize: "64px" }}> Hi! </h1>
      <p style={{ fontSize: "30px", width: "60%", overflow: "scroll" }}>
        I love to make things, whether it be Music, Software, or Food.
        <br/>
        You'll find some of those things here!
      </p>
    </div>
  );
};
