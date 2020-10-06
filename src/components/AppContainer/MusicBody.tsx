import React from 'react';
import Container from 'react-bootstrap/Container';

function MusicBody() {
    return (
        <Container>
            <div className="Music-post">
                <iframe
                    title="Slipping"
                    src="https://open.spotify.com/embed/track/6tm7c6f8oy1bhkShUKxG84"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    allowTransparency={true}
                    allow="encrypted-media">
                </iframe>
            </div>
            <div className="Post-spacer"></div>
            <div className="Music-post">
                <iframe title="Wake With Me"
                    width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215155958&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
                <div style={{fontSize: "10px",
                             color: "#CCCCCC",
                             lineBreak: "anywhere",
                             wordBreak: "normal",
                             overflow: "hidden",
                             whiteSpace: "nowrap",
                             textOverflow: "ellipsis",
                             fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                             fontWeight: 100}}>
                    <a href="https://soundcloud.com/mikahfsmusic" title="MIKAH" target="_blank"
                       style={{color: "#CCCCCC", textDecoration: "none"}} rel="noopener noreferrer">MIKAH</a> ·
                    <a href="https://soundcloud.com/mikahfsmusic/wake-with-me-ft-kirsten-maxwell"
                        title="Wake With Me (ft. Kirsten Maxwell)"
                        target="_blank"
                        style={{color: "#CCCCCC", textDecoration:"none"}}
                        rel="noopener noreferrer">Wake With Me (ft. Kirsten Maxwell)
                    </a>
                </div>
            </div>
            <div className="Post-spacer"></div>
            <div className="Music-post">
                <iframe title="Codeine Falls"
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/154109619&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div style={{fontSize: "10px",
                    color: "#CCCCCC",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: 100}}>
                    <a href="https://soundcloud.com/mikahfsmusic"
                        title="MIKAH"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#CCCCCC", textDecoration: "none"}}>MIKAH</a> ·
                    <a href="https://soundcloud.com/mikahfsmusic/codeine-falls"
                        title="Codeine Falls (ft. Justin Friedman/Rhys Langston/Mariana Quinn-Makwaia/Donovan Brady)"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#CCCCCC", textDecoration:"none"}}>Codeine Falls (ft. Justin Friedman/Rhys Langston/Mariana Quinn-Makwaia/Donovan Brady)
                    </a>
                </div>
            </div>
            <div className="Post-spacer"></div>
            <div className="Music-post">
                <iframe title="Big News Boys"
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/146217549&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div style={{fontSize: "10px",
                    color: "#CCCCCC",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: 100}}>
                    <a href="https://soundcloud.com/mikahfsmusic"
                        title="MIKAH"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#CCCCCC", textDecoration: "none"}}>MIKAH</a> ·
                    <a href="https://soundcloud.com/mikahfsmusic/tbn"
                        title="Big News Boys"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#CCCCCC", textDecoration:"none"}}>Big News Boys
                    </a>
                </div>
            </div>
            <div className="Post-spacer"></div>
            <div className="Music-post">
                <iframe title="ego"
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293823812&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div style={{fontSize: "10px",
                    color: "#CCCCCC",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate, Lucida Grande, Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: 100}}>
                    <a href="https://soundcloud.com/mikahfsmusic"
                        title="MIKAH"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#CCCCCC", textDecoration: "none"}}>MIKAH</a> ·
                    <a href="https://soundcloud.com/mikahfsmusic/ego"
                        title="ego"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#CCCCCC", textDecoration:"none"}}>ego
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default MusicBody;