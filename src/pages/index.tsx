import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import InConstruction from "../components/inConstruction";
import "../styles/global.css";
import MainPage from "./MainPage";
import Navbar from "../components/Navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main
      style={{
        margin: 0,
        height: "100%",
        width: "100%",
      }}
    >
      {/* <Navbar /> */}
      <InConstruction />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
