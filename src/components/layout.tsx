import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import NavbarV2 from "./NavbarV2";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <NavbarV2 />
      <>{children}</>
      <Footer />
    </>
  );
}
