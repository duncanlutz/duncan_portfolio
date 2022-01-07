import React, { useRef, useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Video from "./pages/Video";
import Reels from "./pages/Reels";
import $ from "jquery";
import "./css/App.css";

function App() {
  useEffect(() => {
    if (typeof window.screen.orientation !== "undefined") {
      $("html").css("scroll-snap-type", "y mandatory");
      $("section").css("scroll-snap-align", "start");
      $(".s").addClass("desk-s");
    } else {
      return;
    }
  }, []);

  return (
    <div className="app-cont">
      <header className="App-header"></header>
      <section className="s one">
        <h1 className="dl-head">Duncan Lutz</h1>
        <h5 className="dl-sub">video editor | animator | web developer</h5>
        <Landing />
      </section>
      <section className="s two">
        <Video />
      </section>
      <section className="s three">
        <Reels />
      </section>
    </div>
  );
}

export default App;
