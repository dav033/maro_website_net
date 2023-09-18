import React, { useState, useEffect, useRef } from "react";
import icon from "../assets/images/marosicon1.jpg";
import icon2 from "../assets/images/marosicon2.jpg";
import "../styles/navbar.scss";
import { Link } from "gatsby";
import { RiMore2Fill } from "react-icons/ri";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMostrarMenu((prevMostrarMenu) => !prevMostrarMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleClickOutsideMenu = (event: Event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMostrarMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className={scroll ? "NavbarContainer scrolled" : "NavbarContainer"}>
      <div className={scroll ? "navbar scrolled" : "navbar"}>
        <Link to="/MainPage">
          <img src={icon} className="icon" />
          <img src={icon2} className="iconScrolled" />
        </Link>

        <div className="links">
          <Link to="/MainPage">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link
            to="/contact-us"
            className={scroll ? "consultation scrolled" : "consultation"}
          >
            Free Consultation
          </Link>
        </div>

        <div className="menuContainer">
          <RiMore2Fill onClick={toggleMenu} className="menuButton" />

          <ul ref={menuRef} className={mostrarMenu ? "menu show" : "menu"}>
            <li>
              <Link to="/MainPage">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
