import React from 'react';
import Container from 'react-bootstrap/Container';
import InstagramEmbed from 'react-instagram-embed/';

function CreationsBody() {
    return (
        <Container className="Media-body">
            <div className="Post-spacer"></div>
            <div className="Creation-post">
                <div className="Content-description">Art created for The Uncanny Valley, made with custom 3D software built in C++ and OpenGL</div>
                <InstagramEmbed
                    url='https://www.instagram.com/p/CEV2oozJrRp/'
                    maxWidth={480}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    className="Instagram-embed"
                />
                <div className="Content-spacer"></div>
            </div>
            <div className="Post-spacer"></div>
            <div className="Creation-post">
                <div className="Content-description">Demo of Custom 3D software...</div>
                <InstagramEmbed
                    url='https://www.instagram.com/p/CE2RDruAJlQ/'
                    maxWidth={480}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    className="Instagram-embed"
                />
                <div className="Content-spacer"></div>
            </div>
        </Container>
    )
}

export default CreationsBody;