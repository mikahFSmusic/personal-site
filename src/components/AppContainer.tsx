import React from 'react';
import {Row, Col, Container, Image} from 'react-bootstrap';
import ContentContainer from './AppContainer/ContentContainer';
import AppBackground from './Mikah Thesis Blur.jpg';
import MusicBody from './AppContainer/MusicBody';
import PhotosBody from './AppContainer/PhotosBody';
import CreationsBody from './AppContainer/CreationsBody';
import {ReactComponent as MusicIcon} from './AppContainer/assets/ic-music-note-48px.svg';
import {ReactComponent as CreateIcon} from './AppContainer/assets/ic-create-48px.svg';
import {ReactComponent as PhotoIcon} from './AppContainer/assets/ic-photo-camera-48px.svg';

function AppContainer() {
    return (
        <Container className="App-container" fluid>
            <Row className="App-container-row">
                <Image src={AppBackground}
                    style={{position: "fixed", width: "100vw"}} />
                <Col className="App-container-col">
                    <ContentContainer title="Music"
                        body={<MusicBody />}
                        icon={<MusicIcon width="100px"
                                height="100px"
                                fill="white"
                                stroke="black"
                                className="Overlay-icon"/>} />
                </Col>
                <Col className="App-container-col">
                    <ContentContainer title="Creations"
                        body={<CreationsBody />}
                        icon={<CreateIcon width="100px"
                                height="100px"
                                fill="white"
                                stroke="black"
                                className="Overlay-icon"/>} />
                </Col>
                <Col className="App-container-col">
                    <ContentContainer title="Photos"
                        body={<PhotosBody />}
                        icon={<PhotoIcon width="100px"
                                height="100px"
                                fill="white"
                                stroke="black"
                                className="Overlay-icon"/>} />
                </Col>
            </Row>
        </Container>
    );
}

export default AppContainer;