import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Youtuber() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="SazxNVhr2kU" />
    </div>
  );
}