import React from 'react'
import VideoPlayer from "react-video-js-player";

import Car from "./Egungunbecareful.mp4";

const video = () => {
    const videoSrc =  Car;
    const poster = "https://ibb.co/f2J03ht";

  return (
    <div className='App'>
        <VideoPlayer 
            src={videoSrc}
            poster={poster}
            width="720"
            height="420"
        />
    </div>
  )
}

export default video