import React from "react";
import Container from "react-bootstrap/Container";
import { MusicPost } from "./Music/MusicPost";

export const Music = () => {
  return (
    <div
      id="music"
      className="Music-page-container"
      style={{
        width: "100vw",
        padding: "20px",
        overflow: "scroll",
        backgroundColor: "#a6b1e1",
        scrollBehavior: "unset",
      }}
    >
      <h1 style={{ fontSize: "64px" }}>Music!</h1>
      <br />
      <h2>Originals</h2>
      <Container
        className="Music-content-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        <MusicPost
          embedElement={
            <iframe
              title="Wake With Me"
              className="z-depth-2"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215155958&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          }
        />
        <MusicPost
          embedElement={
            <iframe
              title="Slipping"
              className="z-depth-2"
              src="https://open.spotify.com/embed/track/6tm7c6f8oy1bhkShUKxG84"
              width="100%"
              height="300"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          }
        />
        <MusicPost
          embedElement={
            <iframe
              title="Codeine Falls"
              className="z-depth-2"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154109619&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          }
        />
        <MusicPost
          embedElement={
            <iframe
              title="Big News Boys"
              className="z-depth-2"
              width="100%"
              height="160"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146217549&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          }
        />
        <MusicPost
          embedElement={
            <iframe
              title="ego"
              className="z-depth-2"
              width="100%"
              height="160"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293823812&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          }
        />
      </Container>
      <br/>
      <br/>
      <h2>Mixes</h2>
      <Container
        className="Music-content-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        <MusicPost
          embedElement={
            <iframe
              title="Ten"
              className="z-depth-2"
              style={{border: "0", width: "350px", height: "470px"}}
              src="https://bandcamp.com/EmbeddedPlayer/album=251604984/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
            </iframe>
          }
        />
      </Container>
    </div>
  );
};
