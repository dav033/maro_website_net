import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
