import React from 'react'

import Car from "./Egungunbecareful.mp4";

const Video = () => {
  
  const poster = "img.jpeg";
  
  
  return (
    <div className='App'style={{display:"flex" ,justifyContent:"center"}} >
      <video width="900px" height="300px" controls>
        <source src={Car}  poster={poster} type="video/mp4 " />
        
        
      </video>
    </div>
  )
}

export default Video