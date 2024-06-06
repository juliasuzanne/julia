import { FooterDefault } from "./FooterDefault";
import { Greetings } from "./Greetings";
import axios from "axios";
import "./CSS/home.css";

import { useState, useEffect } from "react";
import { ContactCircle } from "./ContactCircle";
export function HomeButtons() {
  return (
    <div id="home">
      <div className="grid-container">
        {/* <div className="img__wrap">
          <a href="/ayab">
            <p id="description"> misc projects</p>
          </a>
        </div> */}
        <div className="img__wrap">
          <a href="/currentgame">
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
            <p id="description">art </p>
          </a>
        </div>
        {/* <div className="img__wrap">
          <a href="/minigames">
            <p id="description">mini games</p>
          </a>
        </div> */}
      </div>
    </div>
  );
}
