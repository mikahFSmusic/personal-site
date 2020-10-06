import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {ReactComponent as SoundCloud} from './TopBar/Assets/soundcloud_svg.svg';
import {ReactComponent as Spotify} from './TopBar/Assets/spotify_svg.svg';
import {ReactComponent as Instagram} from './TopBar/Assets/instagram_svg.svg';
import {ReactComponent as Facebook} from './TopBar/Assets/facebook_svg.svg';
import {ReactComponent as LinkedIn} from './TopBar/Assets/linkedin_svg.svg';



function TopBar() {
    return (
        <Container className="Top-bar" fluid>
            <div className="Name-text-container">
                <div className="Name-text">
                    Mikah Feldman-Stein
                </div>
                <div className="Name-text-subtitle">
                    Musician, Creator, Developer
                </div>
            </div>
            <div className="Top-bar-spacer">
            </div>
            <div className="Icons-container">
                <Row className="Icons-row">
                    <div className="SM-button">
                        <a href="https://www.soundcloud.com/mikahfsmusic" className="Top-bar-link">
                            <SoundCloud fill="white" stroke="black" className="Top-bar-icon"/>
                        </a>
                    </div>
                    <div className="SM-button">
                        <a href="https://open.spotify.com/artist/6Zn1YXAju2sEspYa3SYAJI" className="Top-bar-link">
                            <Spotify fill="white" stroke="black" className="Top-bar-icon"/>
                        </a>
                    </div>
                    <div className="SM-button">
                        <a href="https://www.instagram.com/mikahfsmusic/" className="Top-bar-link">
                            <Instagram fill="white" stroke="black" className="Top-bar-icon"/>
                        </a>
                    </div>
                    <div className="SM-button">
                        <a href="https://www.facebook.com/mikahFSmusic" className="Top-bar-link">
                            <Facebook fill="white" stroke="black" className="Top-bar-icon"/>
                        </a>
                    </div>
                    <div className="SM-button">
                        <a href="https://www.linkedin.com/in/mikah-feldman-stein-470726100/" className="Top-bar-link">
                            <LinkedIn fill="white" stroke="black" className="Top-bar-icon"/>
                        </a>
                    </div>
                </Row>
            </div>
        </Container>
    );
}

export default TopBar;