import React from "react";
import "../styles/about-us.scss";
import Layout from "../components/layout";
import AboutUsItem from "../components/aboutUs/about-us-item";
import missionImage from "../assets/images/nolan-issac-K5sjajgbTFw-unsplash.jpg";
import missionIcon from "../assets/icons/dart-arrow-in-the-middle-of-circular-board-svgrepo-com.svg";
import visionIcon from "../assets/icons/eye-svgrepo-com.svg";

export default function AboutUs() {
  return (
    <Layout>
      <div className="about-us">
        <div className="presentation">
          <div className="title-container">
            <h1>Crafting Dreams, Building Realities</h1>
          </div>
          <div className="svg-wave-principal"></div>
          <div className="svg-wave-secondary"></div>
          <div className="svg-poligon"></div>

          <div className="image"></div>
        </div>

        <AboutUsItem title="About Us">
          At Maros Construction, we are committed to delivering exceptional home
          improvement solutions. With expertise in kitchen, bathroom and
          driveway renovations, painting services, and concrete restoration, we
          bring your vision to life. Our dedication to quality craftsmanship and
          unwavering professionalism sets us apart. Trust us to transform your
          space into a masterpiece.
        </AboutUsItem>

        <AboutUsItem title="Our Mission" image={missionIcon}>
          Our mission is to provide our clients with superior construction
          services, exceeding their expectations at every step. We strive to
          deliver innovative and customized solutions, ensuring customer
          satisfaction and long-term relationships. With our attention to detail
          and commitment to excellence, we aim to be the premier choice for all
          your remodeling needs."
        </AboutUsItem>

        <AboutUsItem
          title="Our Vission"
          imageLeftOrientation
          image={visionIcon}
        >
          Our vision is to be a trusted leader in the construction industry,
          recognized for our integrity, reliability, and outstanding
          craftsmanship. We aim to constantly raise the bar, setting new
          standards of excellence in every project we undertake. Through our
          passion for creating functional and beautiful spaces, we aspire to
          enhance the lives of our clients and leave a lasting impact on the
          communities we serve.
        </AboutUsItem>

        <div className="servicess">
          <h1>Services</h1>

          <div className="services-container">
            <div>Painting</div>
            <div>Lath & Plastering</div>
            <div>Waterproofing</div>
            <div>New Construction</div>
            <div>Room Aditions</div>
            <div>Kitchen & Bathroom</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
