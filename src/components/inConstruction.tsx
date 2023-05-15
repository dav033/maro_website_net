import React from "react";
import "../styles/inConstruction.scss";
import image from "../assets/images/inWorking.jpg";
import { BsInstagram } from "react-icons/bs";

export default function InConstruction() {
  return (
    <div className="inConstruction">
      <div className="imageContent">
        <img src={image} style={{ margin: 0, padding: 0, display: "block" }} />
      </div>

      <div className="uwu" />

      <div className="informationContent">
        <h1>Cooming soon</h1>
        <h5>We are working on our website</h5>
        <a href="https://www.instagram.com/maros_construction/" target="_blank">
          <BsInstagram className="instagramIcon" />
        </a>
      </div>
    </div>
  );
}
