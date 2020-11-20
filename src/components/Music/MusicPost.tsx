import React from 'react'

interface MusicPostProps {
  embedElement: JSX.Element
}

export const MusicPost = (props: MusicPostProps) => {
  return (
    <div className="Music-post-container"
      style={{
        margin: '5px',
      }}
    >
      {props.embedElement}
    </div>
  )
}