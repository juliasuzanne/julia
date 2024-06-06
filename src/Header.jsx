import { Snowflakes } from "./Snowflakes";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { HomeButtons } from "./HomeButtons";

export function Header() {
  return (
    <header>
      {/* <Snowflakes></Snowflakes> */}
      <div className="header">
        {/* <p className="sig-head"> the website of ... </p> */}

        <a href="/">
          <span className="JuliaG">JULIA SUZANNE GRIMES</span>
          <HomeButtons></HomeButtons>
          {/* <p className="juliagtitle">Why? What? Hello? How? Where? When? Is Anybody Out There?</p> */}
        </a>
        {/* <p className="JuliaG"> JULIA GRIMES </p> */}
        {/* <p className="sig-head"> thanks you for visiting </p> */}
      </div>
      {/* <br></br> */}
    </header>
  );
}
