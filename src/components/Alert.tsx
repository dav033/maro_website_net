import React from "react";
import "../styles/alert.scss";

interface Props {
  children: React.ReactNode;
  type: string;
  show: boolean;
}

export default function Alert(props: Props) {
  const { children, type, show } = props;

  return (
    <div
      className={`alert ${type}`}
      style={show ? { display: "block" } : { display: "none" }}
    >
      {children}
    </div>
  );
}
