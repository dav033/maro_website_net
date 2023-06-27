import "../styles/contact-us.scss";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  function enviarCorreo(e: any) {
    e.preventDefault();
    const data = {
      personalizations: [
        {
          to: [{ email: "david.theran03@gmail.com" }], // Reemplaza con tu dirección de correo electrónico
          subject: "Mensaje de contacto",
        },
      ],
      from: { email: "david.theran032@gmail.com" },
      content: [
        {
          type: "text/plain",
          value: `Nombre: david\n\nMensaje: theran`,
        },
      ],
    };

    // Convertir los datos a formato JSON
    const jsonData = JSON.stringify(data);

    // Crear una instancia del objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.sendgrid.com/v3/mail/send");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer wAy4XZT53M7nz8Na"); // Reemplaza con tu propia clave de API de SendGrid

    xhr.addEventListener("load", function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        console.log("Correo electrónico enviado correctamente");
      } else {
        console.error("Error al enviar el correo electrónico");
      }
    });

    xhr.send(jsonData);
  }

  return (
    <>
      <Navbar />
      <div className="contact-us">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="body">
            <form onSubmit={enviarCorreo}>
              <input type="text" placeholder="Name" />
              <input type="mail" placeholder="Email" />
              <input type="text" placeholder="Service" />
              <textarea placeholder="Message" />
              <button>Send</button>
            </form>

            <div className="information">
              <div>
                <FaMapMarkerAlt className="icon" /> <span>City, State</span>
              </div>

              <div>
                <BsTelephoneFill className="icon" />
                <span>(212) 555-2368</span>
              </div>

              <div>
                <IoMdMail className="icon" />
                <span>david.theran03@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
