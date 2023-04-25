import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import InConstruction from "../components/inConstruction";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main
      style={{
        margin: 0,
        height: "100%",
      }}
    >
      <InConstruction />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
