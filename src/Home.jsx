import { FooterDefault } from "./FooterDefault";
import { Greetings } from "./Greetings";
import axios from "axios";

import { useState, useEffect } from "react";
import { ContactCircle } from "./ContactCircle";
export function Home() {
  return (
    <div id="home">
      <div className="img__wrap">
        <a href="/ayab">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/w_300,f_auto/v1689568546/jacket_qu5w8p.png"
          />
          <div className="img__description_layer">
            {" "}
            <p className="img__description">miscellaneous projects</p>{" "}
          </div>
          <p id="description"> misc projects</p>
        </a>
      </div>
      <div className="img__wrap">
        <a href="/thesisblog">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1706462377/skeleton_b9ewlh.png"
          />
          <div className="img__description_layer">
            <p className="img__description">thesis blog journalling weekly progress</p>
          </div>
          <p id="description"> work journal</p>
        </a>
      </div>
      <div className="img__wrap">
        <a href="/websites">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1706462933/website_ybkjv7.png"
          />
          <p id="description">web dev</p>

          <div className="img__description_layer">
            <p className="img__description">websites I've made </p>
          </div>
        </a>
      </div>
      <div className="img__wrap">
        <a href="/paintings">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1706464309/Screen_Shot_2024-01-28_at_12.44_a1nrb1.png"
          />
          <div className="img__description_layer">
            <p className="img__description">paintings and other visual things I've made</p>
          </div>
          <p id="description">art</p>
        </a>
      </div>
      <div className="img__wrap">
        <a href="/minigames">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1706462220/taroticon_q9u3ec.png"
          />
          <p id="description">mini games</p>

          <div className="img__description_layer">
            <p className="img__description"> an assortment of little interactive experiments</p>{" "}
          </div>
        </a>
      </div>
      <a href="/workjournal">{/* <ContactCircle></ContactCircle> */}</a>
      {/* <img id="home-img" src="/src/assets/images/home.jpg"></img> */}
      {/* <FooterDefault /> */}
    </div>
  );
}
