import React from "react";
import "../styles/mainPage.scss";

import penIcon from "../assets/icons/edit-interface-symbol-of-pencil-outline-svgrepo-com.svg";
import happy from "../assets/icons/happy-happy-face-happy-icon-svgrepo-com.svg";
import mega from "../assets/icons/megaphone-svgrepo-com.svg";
import tools from "../assets/icons/tools-svgrepo-com.svg";

import Navbar from "../components/Navbar";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="mainPage">
        <div className="imageContent principal">
          <h3>Building your dreams, one by one.</h3>
        </div>

        <div className="qualityInformation">
          <div className="item">
            <object data={happy} type="image/svg+xml" className="icon" />
            <h1>Customer Satisfaction</h1>
            <p>
              Our priority is ensuring customer satisfaction by delivering
              exceptional results that meet the highest quality standards.
            </p>
          </div>
          <div className="item">
            <object data={penIcon} type="image/svg+xml" className="icon" />

            <h1>Tailored Designs</h1>
            <p>
              We create custom designs that meet clients' requirements, taking
              into account functionality, aesthetics, and budget to deliver the
              ideal solution for each project.
            </p>
          </div>
          <div className="item">
            <object data={tools} type="image/svg+xml" className="icon" />

            <h1>Expert Craftsmanship</h1>
            <p>
              Our craftsmen deliver outstanding results with pride, using the
              finest materials and precise attention to detail to ensure
              high-quality finishes.
            </p>
          </div>
          <div className="item">
            <object data={mega} type="image/svg+xml" className="icon" />
            <h1>Transparent Communication</h1>
            <p>
              Clear communication is essential. We keep clients informed and
              involved to ensure satisfaction with progress and results.
            </p>
          </div>
        </div>

        <div className="imageContent secondary">
          <div className="floatContainer">
            <h1>Ready for a change? You’ve come to the right place.</h1>
            <p>
              Looking to remodel your home? Our construction company can help
              make the process effortless with in-home consultations, quality
              products, fast demos, and professional installation. From quick
              tub-to-shower conversions to extensive bathroom renovations, we're
              here to assist every step of the way.
            </p>

            <p className="contactLabel">Contact us today to learn more!</p>

            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
}
