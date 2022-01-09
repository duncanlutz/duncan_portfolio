import React, { useEffect } from "react";
import $ from "jquery";
import "../css/Video.css";
import { useElementOnScreen } from "../hooks/DuncansHooks";
import {
  IoVideocamSharp,
  IoDesktopSharp,
  IoAlarmSharp,
  IoTerminalSharp,
} from "react-icons/io5";

import { HiTemplate } from "react-icons/hi";

function Video() {
  const setVidAnim = (e) => {
    const entry = e[0];
      if (
        entry.target.classList.contains("video-title") &&
        entry.isIntersecting === true &&
        !$(".li-cont").hasClass(".set-anim")
      ) {
        $(".li-cont").addClass("set-anim");
      } else {
        return;
      }
  };

  const [contRef, isVisible] = useElementOnScreen(setVidAnim, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  return (
    <div className="vid-page">
      <div className="list-wrapper">
      <h2 className="video-title" ref={contRef}>
        video
      </h2>
        <div className="li-cont li-one" style={{
            transitionDelay: '.4s'
        }}>
          <div className="icon-circle">
            <IoVideocamSharp className="li-icon" size="40" />
          </div>
          <div className="li-text">
            7 years of videography & editing experience.
          </div>
        </div>
        <div className="li-cont li-two" style={{
            transitionDelay: '.5s'
        }}>
          <div className="icon-circle">
            <IoDesktopSharp className="li-icon" size="40" />
          </div>
          <div className="li-text">
            Expert proficiency in Adobe Premiere, Audition, Photoshop,
            Illustrator, After Effects and Davinci Resolve.
          </div>
        </div>
        <div className="li-cont li-three" style={{
            transitionDelay: '.6s'
        }}>
          <div className="icon-circle">
            <IoAlarmSharp className="li-icon" size="40" />
          </div>
          <div className="li-text">
            Filmed, Edited and Animated an average of 90 minutes of polished
            content every month since February 2021.
          </div>
        </div>
        <div className="li-cont li-four" style={{
            transitionDelay: '.7s'
        }}>
          <div className="icon-circle">
            <HiTemplate className="li-icon" size="40" />
          </div>
          <div className="li-text">
            Well versed at designing template files for standardized graphics
            creation (example / further explanation below).
          </div>
        </div>
        <div className="li-cont li-five" style={{
            transitionDelay: '.8s'
        }}>
          <div className="icon-circle">
            <IoTerminalSharp className="li-icon" size="40" />
          </div>
          <div className="li-text">
            Experience developing scripts and extensions for Adobe Premiere Pro
            and After Effects to streamline workflow.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
