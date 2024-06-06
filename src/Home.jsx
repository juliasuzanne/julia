import { FooterDefault } from "./FooterDefault";
import { Greetings } from "./Greetings";
import axios from "axios";
import "./CSS/home.css";

import { useState, useEffect } from "react";
import { ContactCircle } from "./ContactCircle";
export function Home() {
  return (
    <div id="home">
      {/* <img id="home-img" src="/src/assets/images/home.jpg"></img> */}
      {/* <FooterDefault /> */}
      <div className="telescope-image-small"></div>

      <div className="telescope">
        <p className="helloP">
          <strong>Hello,</strong> and welcome. My name is Julia Grimes and I'm interested in artistic games, design, and
          other forms of creative experimentation. Thanks for visiting my site. Please get in touch:{" "}
          <strong>julia.s.grimes@gmail.com </strong>
        </p>
        <div className="telescope-image"></div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
