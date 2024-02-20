import React from "react";
import "../styles/mainPage.scss";

import Services from "../components/MainPage/Services";
import Layout from "../components/layout";
import ExampleVideo from "../components/MainPage/ExampleVideo";
import reel1 from "../assets/videos/reel1.webm";
import reel2 from "../assets/videos/reel2.webm";
import reel3 from "../assets/videos/reel3.webm";
const backgroundClasses = ["back1", "back2"];

export default function MainPage() {
  const [currentBackground, setCurrentBackground] = React.useState(0);

  const [prueba, setPrueba] = React.useState("");

  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setPrueba("hola");

    setTimeout(() => {
      setPrueba("");
    }, 2000);
    const hacerAlgo = () => {
      if (divRef.current) {
        setPrueba("hola");
        setTimeout(() => {
          setPrueba("");
        }, 2000);
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
    <Layout>
      <div className="mainPage">
        <div
          ref={divRef}
          className={`imageContent principal ${backgroundClasses[currentBackground]} ${prueba}`}
        >
          <h3>Building your dreams, one by one.</h3>
        </div>

        <Services />

        <div className="videos">
          <ExampleVideo src={reel1} />
          <ExampleVideo src={reel2} />
          <ExampleVideo src={reel3} />
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
    </Layout>
  );
}
