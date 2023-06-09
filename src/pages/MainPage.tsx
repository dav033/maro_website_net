import React from "react";
import "../styles/mainPage.scss";

import Navbar from "../components/Navbar";
import Services from "../components/MainPage/Services";
import Footer from "../components/Footer";

const backgroundClasses = ["back1", "back2"];

export default function MainPage() {
  const [currentBackground, setCurrentBackground] = React.useState(0);

  const [prueba, setPrueba] = React.useState("");

  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setPrueba("hola");

    setTimeout(() => {
      setPrueba("");
    }, 6100);
    const hacerAlgo = () => {
      if (divRef.current) {
        setPrueba("hola");
        setTimeout(() => {
          setPrueba("");
        }, 6100);
      }
      setCurrentBackground((prev) => {
        if (prev === 0) {
          return 1;
        } else {
          return 0;
        }
      });
    };

    const intervalo = setInterval(hacerAlgo, 10000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="mainPage">
        <div
          ref={divRef}
          className={`imageContent principal ${backgroundClasses[currentBackground]} ${prueba}`}
        >
          <h3>Building your dreams, one by one.</h3>
        </div>

        <Services />

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

      <Footer />
    </>
  );
}
