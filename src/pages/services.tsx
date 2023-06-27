import React from "react";
import "../styles/services.scss";
import Navbar from "../components/Navbar";
import images from "../images";
import ServicePageItem from "../components/servicePageItem";

export default function Services() {
  const [scroll, setScroll] = React.useState(false);
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

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const prueba = React.useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const option = urlParams.get("option");

    if (option) {
      console.log(option);
      setTargetSection(option);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    prueba();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (targetSection) {
      scrollToSection(targetSection);
    }
  }, [targetSection]);

  return (
    <>
      <Navbar />
      <div className="servicesPage">
        <div className="services-presentation">
          <div style={scroll ? { zIndex: 0 } : { zIndex: 1000000 }}>
            <h5>Services</h5>

            <h1>SHAPE YOUR VISION</h1>
          </div>
        </div>

        <div className="service-introduction">
          <p>
            Rockford Construction develops, builds and manages spaces that make
            a positive impact on our team, our clients and our communities.
            <button>LEARN MORE</button>
          </p>
        </div>

        <ServicePageItem
          title="Painting"
          images={[
            { default: images.paint, medium: images.paintMedium.def },
          ]}
          idSection="painting"
        >
          Enhance the beauty and ambiance of your spaces with our expert
          painting services. Whether you require interior or exterior painting,
          our team will provide meticulous attention to detail, ensuring a
          flawless and long-lasting finish. We work closely with our clients to
          understand their preferences and deliver personalized results
        </ServicePageItem>

        <ServicePageItem
          title="Lath & Plastering"
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
          title="Waterproofing"
          images={[
            {
              default: images.waterproofing,
              medium: images.waterproofingMedium,
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
          title="New Construction"
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
        </ServicePageItem>

        <ServicePageItem
          title="Room Aditions"
          images={[
            { default: images.room, medium: images.roomMedium },
          ]}
          idSection="roomadditions"
        >
          If you require additional space in your home or office, our room
          addition services are the perfect solution. Our team of architects,
          engineers, and construction experts will seamlessly integrate new
          rooms into your existing structure, considering aesthetics,
          functionality, and structural integrity. We ensure that the new space
          blends harmoniously with the rest of your property.
        </ServicePageItem>

        <ServicePageItem
          title="Kitchen & Bathroom Renovations"
          images={[
            { default: images.bath, medium: images.bathMedium },
            {
              default: images.kitchen,
              medium: images.kitchenMedium,
            },
          ]}
          idSection="kitchenbathroom"
          leftOrientation
        >
          Revitalize the heart of your home or give your bathroom a stunning
          makeover with our kitchen and bathroom renovation services. We work
          closely with you to understand your design preferences, functionality
          requirements, and budget constraints. Our skilled craftsmen will
          transform your space, delivering a beautiful, functional, and
          personalized result.
        </ServicePageItem>
      </div>
      ;
    </>
  );
}
