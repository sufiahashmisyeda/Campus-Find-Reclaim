import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "../css/landing.css";
import "../css/Navbar.css";
import Axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import image from "../img/rr.jpg";

// import image from "../img/earth.svg";
import { Container, Row, Button, Form } from "react-bootstrap";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const ref = useRef();
  AOS.init();

  AOS.init({
    // Global settings:
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 700,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  const sendMessage = () => {
    const data = {
      name,
      email,
      message,
    };
    Axios({
      method: "POST",
      url: "https://lost-and-found-back2.onrender.com/sendmessage",
      data: data,
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <Navbar />
      <div data-aos="fade-right" className="main">
        <div className="intro">
          <div className="part-1">
            <div className="title">
              <h1 id="title-h">Sherlock</h1>
              <p>Lost it😕. List it📃. Find it🤩.</p>
              <Button
                variant="custom"
                size="lg"
                onClick={() => {
                  ref.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="part-2">
            <div className="image">
              <img
                src={image}
                style={{ width: "500px", height: "500px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="personal-info">
          <p>Created with ❤️ using MERN by </p>
          <h4>
            <span className="symbol">&#60;</span>Syeda Sufia Hashmi
            <span className="symbol">/&#62;</span>
          </h4>
          <h6>Full Stack Developer</h6>
          {
            <a
              href="mailto:sufia29814@gmail.com?subject=${subject}&body=${body}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6>Contact Us</h6>
            </a>
          }
        </div>
        <h5 style={{ textAlign: "center" }}>
          Copyright © 2023 Syeda Sufia Hashmi. All rights reserved.
        </h5>
      </div>
    </>
  );
}
