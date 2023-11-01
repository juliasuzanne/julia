import { FooterDefault } from "./FooterDefault";
import axios from "axios";

import { useState, useEffect } from "react";

export function Home() {
  const [greeting3, setGreeting3] = useState([]);

  const [greeting2, setGreeting2] = useState([]);
  const [greeting1, setGreeting1] = useState([]);

  const handleIndexGreeting1 = () => {
    console.log("handleIndexDrawings");
    axios.get(`https://www.greetingsapi.com/random`).then((response) => {
      console.log(response.data);

      setGreeting1([...greeting1, response.data]);
      setGreeting1(response.data);
      if (greeting1 == greeting3 || greeting2 == greeting1) {
        handleIndexGreeting3();
      }
    });
  };
  const handleIndexGreeting2 = () => {
    console.log("handleIndexGreeting2");
    axios.get(`https://www.greetingsapi.com/random`).then((response) => {
      console.log(response.data);

      setGreeting2([...greeting2, response.data]);
      setGreeting2(response.data);
      if (greeting1 == greeting2 || greeting2 == greeting3) {
        handleIndexGreeting2();
      }
    });
  };

  const handleIndexGreeting3 = () => {
    console.log("handleIndexGreeting3");
    axios.get(`https://www.greetingsapi.com/random`).then((response) => {
      console.log(response.data);

      setGreeting3([...greeting2, response.data]);
      setGreeting3(response.data);
      if (greeting1 == greeting3 || greeting2 == greeting3) {
        handleIndexGreeting3();
      }
    });
  };

  useEffect(handleIndexGreeting1, []);
  useEffect(handleIndexGreeting2, []);
  useEffect(handleIndexGreeting3, []);

  return (
    <div id="home">
      <br></br>
      <h3 className="title-text">
        {greeting3.greeting}, {greeting1.greeting}, {greeting2.greeting}!
      </h3>
      <h6 style={{ fontStyle: "italic" }}>
        {" "}
        (That's hello in {greeting3.language}, {greeting1.language}, and {greeting2.language}!){" "}
      </h6>
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
