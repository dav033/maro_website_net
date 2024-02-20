import React from "react";
import "../styles/services.scss";
import images from "../images";
import ServicePageItem from "../components/servicePageItem";
import Layout from "../components/layout";

export default function Services() {
  const [targetSection, setTargetSection] = React.useState<string | null>(null);

  function scrollToSection(sectionId: string) {
    var section = document.getElementById(sectionId);
    if (sectionId && section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }

  const initialize = React.useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const option = urlParams.get("option");

    if (option) {
      setTargetSection(option);
    }
  }, []);

  React.useEffect(() => {
    initialize();
  }, []);

  React.useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
    }
  }, [targetSection]);

  return (
    <Layout>
      <div className="servicesPage">
        <div className="titleContainer">
          <h3>Services</h3>
          <h1>Shape Your Vision</h1>
        </div>

        <div className="services-presentation">
          {/* <div>
            <h5>Services</h5>

            <h1>SHAPE YOUR VISION</h1>
          </div> */}
        </div>

        <div className="service-introduction">
          <p>
            Rockford Construction develops, builds and manages spaces that make
            a positive impact on our team, our clients and our communities.
            <button>LEARN MORE</button>
          </p>
        </div>

        <ServicePageItem
          title="Concrete Repair"
          images={[{ default: images.lath, medium: images.lath }]}
          idSection="painting"
        >
          Enhance the beauty and ambiance of your spaces with our expert
          painting services. Whether you require interior or exterior painting,
          our team will provide meticulous attention to detail, ensuring a
          flawless and long-lasting finish. We work closely with our clients to
          understand their preferences and deliver personalized results
        </ServicePageItem>

        {/* <ServicePageItem
          title="DriveWays"
          images={[
            { default: images.lath, medium: images.lathMedium },
            {
              default: images.plastering,
              medium: images.plasteringMedium,
            },
          ]}
          idSection="lathplastering"
          leftOrientation
        >
          Our skilled team specializes in lath and plastering services,
          including stucco application. Whether you need a new stucco
          installation, repair, or restoration, we have the expertise to handle
          projects of any size. We use top-quality materials and techniques to
          ensure a durable and aesthetically pleasing finish
        </ServicePageItem>

        <ServicePageItem
          title="Sidewalks"
          images={[
            {
              default: images.plastering,
              medium: images.plastering,
            },
          ]}
          idSection="waterproofing"
        >
          Protect your property from water damage with our comprehensive
          waterproofing solutions. We employ advanced techniques and
          high-quality materials to prevent leaks, moisture intrusion, and
          potential structural issues. From basements to roofs, we offer
          reliable waterproofing services tailored to your specific needs
        </ServicePageItem>

        <ServicePageItem
          title="Decks"
          images={[
            {
              default: images.House,
              medium: images.HouseMedium,
            },
            {
              default: images.Building,
              medium: images.BuildingMedium,
            },
          ]}
          idSection="newconstruction"
          leftOrientation
        >
          Turn your dreams into reality with our new construction services.
          Whether it's a residential or commercial project, we have the
          expertise and resources to handle every aspect of the construction
          process. From concept and design to construction and finishing
          touches, we strive to exceed your expectations and deliver a space
          that perfectly aligns with your vision
        </ServicePageItem> */}
      </div>
      ;
    </Layout>
  );
}
