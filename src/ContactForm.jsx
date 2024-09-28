import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import "./CSS/ContactForm.css";
import emailjs from "@emailjs/browser";
import { Header } from "./Header";

export function ContactForm() {
  const form = useRef();
  const [errors, setErrors] = useState([]);
  const [errorShow, setErrorShow] = useState(true);
  const [successMessageShow, setSuccessMessageShow] = useState(true);
  const [successMessage, setSuccessMessage] = useState([]);
  useEffect(() => {
    document.title = "Contact - Julia Grimes";
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    const params = new FormData(e.target);
    setErrors([]);

    emailjs
      .sendForm("service_lm9j9s3", "template_b0xo5gu", form.current, {
        publicKey: "8K6quPX9rCuFe991S",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setSuccessMessage(["E-mail sent successfully!"]);
          setSuccessMessageShow(false);
          setErrorShow(true);
          setErrors([]);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccessMessage([]);
          setErrorShow(false);
          setSuccessMessageShow(true);
          setErrors(["Please fill out all fields"]);
        }
      );
  };

  return (
    <>
      <Header currentPage={"home"} />

      <div id="login">
        <form ref={form} onSubmit={sendEmail}>
          <div className="container">
            <div className="row">
              <div className="email-outsides">
                <h2 className="heading" id="contactFormHeader">
                  Get In Touch
                </h2>
              </div>
            </div>
            <div className="blueLine"></div>
            <div className="blueLine2"></div>
            <div className="lineBreak"></div>

            <div className="break2"> </div>

            <div className="row">
              <div className="col-sm-6">
                <input type="text" className="form-styling" name="name" placeholder="First Name" required />
              </div>
              <div className="col-sm-6">
                <input type="text" placeholder="Last Name" className="form-styling" name="last_name" required />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <input type="email" placeholder="E-mail" className="form-styling" name="user_email" required />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <textarea className="textarea" name="message" placeholder="Message" required />
                {/* <input name="message" className="textarea form-control" type="text" /> */}
              </div>
            </div>
            <ul hidden={successMessageShow} className="success">
              {successMessage.map((successMessage) => (
                <li key={successMessage}>{successMessage}</li>
              ))}
            </ul>
            <ul hidden={errorShow} className="errors">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <div className="row">
              <input type="submit" value="CONTACT" className="submitbutton btn btn-secondary mt-3 submit " />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
