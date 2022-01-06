import React from "react";
import "../css/Video.css";
import { IoVideocamSharp, IoDesktopSharp } from "react-icons/io5";

function Video() {
  return (
    <div className="vid-page">
      <div className="list-wrapper">
        <div className="li-cont">
          <div className="icon-circle">
            <IoVideocamSharp className="li-icon" size="40" />
          </div>
          <div className="li-text">
            7 years of videography & editing experience.
          </div>
        </div>
        <div className="li-cont">
          <div className="icon-circle">
            <IoDesktopSharp className="li-icon" size="40" />
          </div>
          <div className="li-text">
            Expert proficiency in Adobe Premiere, Audition, Photoshop,
            Illustrator, After Effects and Davinci Resolve.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
