import { FooterDefault } from "./FooterDefault";
import { Greetings } from "./Greetings";
import axios from "axios";
import "./CSS/home.css";

import { useState, useEffect } from "react";
import { ContactCircle } from "./ContactCircle";
export function Home() {
  return (
    <div id="home">
      <div className="grid-container">
        <div className="img__wrap">
          <a href="/ayab">
            <p id="description"> misc projects</p>
          </a>
        </div>
        <div className="img__wrap">
          <a href="/thesisblog">
            <p id="description"> game dev</p>
          </a>
        </div>
        <div className="img__wrap">
          <a href="/websites">
            <p id="description">web dev</p>
          </a>
        </div>
        <div className="img__wrap">
          <a href="/paintings">
            <p id="description">art experiments </p>
          </a>
        </div>
        <div className="img__wrap">
          <a href="/minigames">
            <p id="description">mini games</p>
          </a>
        </div>
      </div>

      {/* <img id="home-img" src="/src/assets/images/home.jpg"></img> */}
      {/* <FooterDefault /> */}
      <br></br>
      <br></br>
      <div className="telescope">
        <p className="helloP">
          Hello, my name is Julia Grimes and I'm interested in artistic games, design, and other forms of creative
          experimentation. Thanks for visiting my site. Please get in touch: julia.s.grimes@gmail.com{" "}
        </p>
        <div className="telescope-image"></div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
