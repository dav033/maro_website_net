import React, { useState, useEffect, useRef } from "react";
import icon from "../assets/images/marosicon1.jpeg";
import "../styles/navbar.scss";
import { Link } from "gatsby";
import { RiMore2Fill } from "react-icons/ri";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const menuRef = useRef(null); // Referencia al elemento del menú

  const toggleMenu = () => {
    setMostrarMenu((prevMostrarMenu) => !prevMostrarMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMostrarMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutsideMenu); // Cambiado a mousedown para capturar el clic antes de que se active el botón

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div className={scroll ? "NavbarContainer scrolled" : "NavbarContainer"}>
      <div className={scroll ? "navbar scrolled" : "navbar"}>
        <img src={icon} />

        <div className="links">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Services</a>
          <a href="/">Contact Us</a>
        </div>

        <div className="menuContainer">
          <RiMore2Fill onClick={toggleMenu} className="menuButton" />

          <ul ref={menuRef} className={mostrarMenu ? "menu show" : "menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
