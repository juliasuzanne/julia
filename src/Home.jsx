import { FooterDefault } from "./FooterDefault";
import axios from "axios";

import { useState, useEffect } from "react";

export function Home() {
  const [greetings, setGreetings] = useState([]);

  const handleIndexGreetings = () => {
    console.log("handleIndexDrawings");
    axios.get(`https://www.greetingsapi.com/greetings.json`).then((response) => {
      console.log(response.data);
      setGreetings([...greetings, response.data]);
      setGreetings(response.data);
    });
  };

  useEffect(handleIndexGreetings, []);

  return (
    <div id="home">
      <br></br>
      <h3 className="title-text">Hello, As-salam, Guten Tag!</h3>
      <p>
        {" "}
        My name is Julia Grimes. I am a web developer and aspiring indie game developer based out of Boston, MA. Welcome
        to my personal website, where I try to share my product, process, and interests. Please feel free to reach out
        to me at julia.s.grimes@gmail.com.
      </p>
      <p className="fonted-links">
        ~ &nbsp; <a href="https://github.com/juliasuzanne">Github</a> ~ &nbsp;
        {/* <a href="/websites"> websites &nbsp; </a>~ &nbsp;
        <a href="/family"> games &nbsp; </a>~ &nbsp;
        <a href="/family"> art &nbsp;</a>~ &nbsp;
        <a href="/family"> about </a> */}
      </p>
      <div className="img__wrap">
        <a href="/ayab">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_300,f_auto/v1689568546/jacket_qu5w8p.png"
          />
          <div className="img__description_layer">
            <p className="img__description">fabric and sewing</p>
          </div>
        </a>
      </div>

      <div className="img__wrap">
        <a href="/thesisblog">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_300,f_auto/v1698020706/Screen_Shot_2023-10-22_at_8.25.02_PM_srj8n0.png"
          />
          <div className="img__description_layer">
            <p className="img__description">thesis Unity blog</p>
          </div>
        </a>
      </div>

      <div className="img__wrap">
        <a href="/websites">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_300,f_auto/v1689569179/kate_nbw43i.png"
          />
          <div className="img__description_layer">
            <p className="img__description">web development</p>
          </div>
        </a>
      </div>

      <div className="img__wrap">
        <a href="/paintings">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_300,f_auto/v1689569220/parrot_ocnfql.png"
          />
          <div className="img__description_layer">
            <p className="img__description">art</p>
          </div>
        </a>
      </div>

      <div className="img__wrap">
        <a href="/minigames">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_300,f_auto/v1689569196/tarots_zv5vym.png"
          />
          <div className="img__description_layer">
            <p className="img__description">mini-games</p>
          </div>
        </a>
      </div>

      {/* <img id="home-img" src="/src/assets/images/home.jpg"></img> */}

      <FooterDefault />
    </div>
  );
}
