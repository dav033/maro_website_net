import React from "react";
import "../styles/footer.scss";
import { Link } from "gatsby";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <Link
            to="https://www.instagram.com/maros_construction/"
            className="icon"
            target="_blank"
          >
            <BsInstagram />
          </Link>
        </div>

        <div className="row">
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Contact us</Link>
            </li>
            <li>
              <Link to="#">Our Services</Link>
            </li>

            <li>
              <Link to="#">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="row">
          Maros Construction Copyright © 2023 - All rights reserved
        </div>
      </div>
    </footer>
  );
}
