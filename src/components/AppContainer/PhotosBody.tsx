import React from 'react';
import Container from 'react-bootstrap/Container';
import MikahSax from './assets/Mikah Sax.jpg';

function PhotosBody() {
    return (
        <Container>
            <div className="Creation-post">
                <img src={MikahSax} style={{height: 'inherit'}} alt="Playing sax at thesis performance"></img>
            </div>
        </Container>
    )
}

export default PhotosBody;