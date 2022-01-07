import React from "react";
import ReactPlayer from "react-player";
import "../css/Reels.css";

function Reels() {
  return (
    <div className="reel-wrapper">
      <h2 className="video-title">reel</h2>
      <div className="program-wrapper">
          <ReactPlayer url='https://vimeo.com/637402389' width='100%' height='100%'/>
      </div>
    </div>
  );
}

export default Reels;
