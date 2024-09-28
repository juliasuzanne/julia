import { FooterDefault } from "./FooterDefault";
import { Greetings } from "./Greetings";
import axios from "axios";
import { AppContext } from "./state";
import { useContext } from "react";
import { useState } from "react";

import "./CSS/home.css";

export function HomeButtons(props) {
  return (
    <div id="home">
      <div className="grid-container">
        <div className="img__wrap">
          <a href="/currentgame">
            <p
              style={props.currentPage === "currentgame" ? { fontWeight: "bold" } : { fontWeight: "normal" }}
              id="description"
            >
              {" "}
              game dev
            </p>
          </a>
        </div>
        <div className="img__wrap">
          <a href="/websites">
            <p
              style={props.currentPage === "websites" ? { fontWeight: "bold" } : { fontWeight: "normal" }}
              id="description"
            >
              web dev
            </p>
          </a>
        </div>
        <div className="img__wrap">
          <a href="/paintings">
            <p
              style={props.currentPage === "paintings" ? { fontWeight: "bold" } : { fontWeight: "normal" }}
              id="description"
            >
              art & Design
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
