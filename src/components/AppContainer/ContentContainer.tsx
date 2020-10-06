import React from 'react';

interface ContentProps {
    title?: String,
    body: JSX.Element,
    icon: JSX.Element
}

function ContentContainer(props: ContentProps) {
    // const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    return (
        <div className="Content-container">
            <div className="Content">
                <div className="Content-body">{props.body}</div>
            </div>
            <div className="Content-overlay">
                <div className="Content-icon-container">
                    <div className="Content-icon">{props.icon}</div>
                </div>
            </div>
        </div>
    )
}

export default ContentContainer;