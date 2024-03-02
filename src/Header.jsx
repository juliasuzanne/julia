import { Snowflakes } from "./Snowflakes";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function Header() {
  const [greeting1, setGreeting1] = useState([]);

  const handleIndexGreetings = () => {
    console.log("handleIndexGreetings");
    axios.get(`https://zenquotes.io/api/random`).then((response) => {
      console.log(response.data);
      setGreeting1(response.data);
    });
  };

  useEffect(handleIndexGreetings, []);

  return (
    <header>
      <Snowflakes></Snowflakes>
      <div className="header">
        {/* <p className="sig-head"> the website of ... </p> */}

        <a href="/">
          <span className="JuliaG">JULIA SUZANNE GRIMES</span>
          <p className="juliagtitle">{greeting1[0].q}</p>
        </a>
        {/* <p className="JuliaG"> JULIA GRIMES </p> */}
        {/* <p className="sig-head"> thanks you for visiting </p> */}
      </div>
      <br></br>
    </header>
  );
}
