import React, { useEffect, useState, useRef } from "react";
import "../styles/navbarv2.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "gatsby";
import DropdownMenu from "./DropdownMenu";
import { set } from "lodash";

export default function NavbarV2() {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLAnchorElement>(null);
  const [page, setPage] = useState("home");

  const handleMouseEnter = () => {
    setMenu(true);
  };

  const handleMouseLeave = () => {
    setMenu(false);
  };

  const positionDropdownMenu = () => {
    if (menuButtonRef.current && menuRef.current) {
      const buttonRect = menuButtonRef.current.getBoundingClientRect();
      menuRef.current.style.left = `${buttonRect.left}px`;
    }
  };

  useEffect(() => {
    if (menu) {
      positionDropdownMenu();
    }
  }, [menu]);

  useEffect(() => {
    const menuNode = menuRef.current;

    const location = window.location.pathname;

    const locationParsed = location.substring(1, location.length - 1);

    console.log(locationParsed);
    setPage(locationParsed);

    const handleMenuMouseEnter = () => {
      setMenu(true);
    };

    const handleMenuMouseLeave = () => {
      setMenu(false);
    };

    if (menuNode) {
      menuNode.addEventListener("mouseover", handleMenuMouseEnter);
      menuNode.addEventListener("mouseleave", handleMenuMouseLeave);

      return () => {
        menuNode.removeEventListener("mouseover", handleMenuMouseEnter);
        menuNode.removeEventListener("mouseleave", handleMenuMouseLeave);
      };
    }
  }, []);

  return (
    <div className={`navbar-v2 ${page}`}>
      <Link className="logo" to="/MainPage">
        Maros Construction
      </Link>

      <Link to="/about-us">About Us</Link>

      <Link
        to="/services"
        ref={menuButtonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Services <IoIosArrowDown />
      </Link>

      <DropdownMenu menuRef={menuRef} menu={menu} />

      <Link to="/about-us">Contact Us</Link>
    </div>
  );
}
