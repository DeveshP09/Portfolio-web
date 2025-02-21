import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaWhatsappSquare } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dtgsrpj", "template_rmresvj", form.current, {
        publicKey: "zcJFeeIWMueuRq9ts",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="container contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt=""
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2  ">
                <div className="row">
                  <h6 className="social">
                    Connect with
                    <div>
                      <div className="icons">
                        <a
                          href="https://www.linkedin.com/in/devesh-patil-113036246/"
                          className="linkedin"
                        >
                          <IoLogoLinkedin />
                        </a>
                        <a
                          href="https://github.com/DeveshP09"
                          className="github"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href="https://api.whatsapp.com/send?phone=8767263626"
                          className="whatsapp"
                        >
                          <FaWhatsappSquare />
                        </a>
                      </div>
                    </div>
                  </h6>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">Write Your Message</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="mb-1"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="mb-1"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Your Message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" type="submit" value="Send" >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
