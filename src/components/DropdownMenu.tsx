import { Link } from "gatsby";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import React from "react";
import "../styles/dropdownMenu.scss";

interface DropdownMenuProps {
  menu: boolean;
  menuRef: React.RefObject<HTMLUListElement>;
}

export default function DropdownMenu(props: DropdownMenuProps) {
  const { menu, menuRef } = props;
  return (
    <ul ref={menuRef} className={menu ? "menu show" : "menu"}>
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
  );
}
