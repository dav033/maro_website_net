import "../../styles/about-us-item.scss";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  image?: string;
  imageLeftOrientation?: boolean;
}

export default function AboutUsItem(props: Props) {
  return (
    <div
      className={props.image ? "about-us-item image" : "about-us-item"}
      id={props.imageLeftOrientation ? "imageLeft" : ""}
    >
      <div className="text-container">
        <h4>{props.title}</h4>
        {/* <div className="line"></div> */}
        <p>{props.children}</p>
      </div>

      {props.image ? <object data={props.image} type="image/svg+xml" /> : null}
    </div>
  );
}
