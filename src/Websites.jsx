import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { ContactCircle } from "./ContactCircle";
import { useEffect } from "react";
import "./CSS/websites.css";

export function Websites() {
  useEffect(() => {
    document.title = "Web Development Projects";
  }, []);
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715312192/Screen_Shot_2024-05-09_at_11.36.27_PM_uzumot.png"></img>
      </div>
      <div className="grid-item">
        <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715312099/Screen_Shot_2024-05-09_at_11.34.53_PM_fqnfdk.png"></img>
      </div>
      <div className="grid-item">
        <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569179/kate_nbw43i.png"></img>
      </div>
      <div className="grid-item">
        <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689568891/1_qaohd6.png"></img>
      </div>
      <div className="grid-item">
        <img src=" https://res.cloudinary.com/dytb4ayqj/image/upload/v1717685548/Screen_Shot_2024-06-06_at_10.52.00_AM_qtnlje.png"></img>
      </div>
    </div>
  );
}
