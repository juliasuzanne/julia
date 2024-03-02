import { Snowflakes } from "./Snowflakes";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function Header() {
  return (
    <header>
      <Snowflakes></Snowflakes>
      <div className="header">
        {/* <p className="sig-head"> the website of ... </p> */}

        <a href="/">
          <span className="JuliaG">JULIA SUZANNE GRIMES</span>
          <p className="juliagtitle">welcome to my site.</p>
        </a>
        {/* <p className="JuliaG"> JULIA GRIMES </p> */}
        {/* <p className="sig-head"> thanks you for visiting </p> */}
      </div>
      <br></br>
    </header>
  );
}
