import React, { useEffect } from "react";
import Landing from "./Landing";
import Video from "./Video";
import Reels from "./Reels";
import Scripting from "./Scripting";
import $ from "jquery";

function VidWork() {
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
        <Scripting />
      </section>
      <section className="s four">
        <Reels />
      </section>
    </div>
  );
}

export default VidWork;
