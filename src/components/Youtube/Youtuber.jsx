import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function Youtuber() {
  return (
    <div className="App">
      <h1>What we do</h1>
      <YoutubeEmbed embedId="V0IKClAGKS8" />
    </div>
  );
}