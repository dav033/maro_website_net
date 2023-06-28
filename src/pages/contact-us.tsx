import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import "../styles/contact-us.scss";
import Alert from "../components/Alert";

export default function ContactUs() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const initialize = React.useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const option = urlParams.get("service");
    switch (option) {
      case "painting":
        setService("Painting");
        break;
      case "lathplastering":
        setService("Lath & Plastering");
        break;
      case "waterproofing":
        setService("Waterproofing");
        break;
      case "newconstruction":
        setService("New Construction");
        break;
      case "roomadditions":
        setService("Room Additions");
        break;
      case "kitchenbathroom":
        setService("Kitchen & Bathroom");
        break;
    }
  }, []);

  useEffect(() => {
    initialize();
  }, []);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  function enviarCorreo(e: any) {
    e.preventDefault();

    if (name === "") {
      setAlertMessage("Name is required");
      setAlertType("warning");
      handleAlert();
      return;
    } else if (email === "") {
      setAlertMessage("Email is required");
      setAlertType("warning");
      handleAlert();
      return;
    } else if (message === "") {
      setAlertMessage("Message is required");
      setAlertType("warning");
      handleAlert();
      return;
    }

    const data = {
      description: message,
      email: email,
      name: name,
      service: service,
    };

    axios
      .post("http://localhost:3000/contact-us", { data })
      .then((res) => {
        console.log(res);
        setAlertMessage("Email sent successfully");
        setAlertType("success");
        handleAlert();
      })
      .catch((err) => {
        console.log(err);
        setAlertMessage("Error sending email");
        setAlertType("error");
        handleAlert();
      });
  }

  return (
    <>
      <Navbar />
      <div className="contact-us">
        <Alert type={alertType} show={showAlert}>
          {alertMessage}
        </Alert>
        <div className="container">
          <h1>Contact Us</h1>
          <div className="body">
            <form onSubmit={enviarCorreo}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Service"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button>Send</button>
            </form>

            <div className="information">
              <div>
                <FaMapMarkerAlt className="icon" /> <span>Miami, Florida</span>
              </div>

              <div>
                <BsTelephoneFill className="icon" />
                <span>(786) 707-0815</span>
              </div>

              <div>
                <IoMdMail className="icon" />
                <span>info@marosconstruction.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
