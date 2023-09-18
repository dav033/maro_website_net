import React from "react";
import "../../styles/exampleVideo.scss";

export default function ExampleVideo(props: any) {
  return (
    <video autoPlay muted loop  controls className="video">
      <source src={props.src} type="video/webm"></source>
    </video>
  );
}
