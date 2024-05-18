import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { ContactCircle } from "./ContactCircle";
import { useEffect } from "react";

export function Websites() {
  useEffect(() => {
    document.title = "Web Development Projects";
  }, []);
  return (
    <div
      style={{ display: "inline-block", maxWidth: "68vw", paddingBottom: "10vh", height: "80vh", paddingTop: "10vh" }}
    >
      <ContactCircle></ContactCircle>
      <Carousel>
        <Carousel.Item className="carousel" interval={5500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715312192/Screen_Shot_2024-05-09_at_11.36.27_PM_uzumot.png"
            alt="Image Two"
          />
          <div className="carousel-description">
            <br></br>
            <h3 className="reg"> Client Project for Software Company, demo of features</h3>
            <a href="https://ecrebocpr.com/">
              <h4 className="title"> CLICK TO SEE MORE </h4>
              <br></br>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel" interval={5500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715312099/Screen_Shot_2024-05-09_at_11.34.53_PM_fqnfdk.png"
            alt="Image Two"
          />
          <div className="carousel-description">
            <br></br>
            <h3 className="reg"> Client Project, landing page for Boutique Recruitment Firm</h3>
            <a href="https://growthtalentsolutions.biz/">
              <h4 className="title"> CLICK TO SEE MORE </h4>
              <br></br>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel" interval={5500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569179/kate_nbw43i.png"
            alt="Image Two"
          />
          <div className="carousel-description">
            <br></br>
            <h3 className="reg"> Client Project - Artist Portfolio</h3>
            <a href="/kate">
              <h4 className="title"> CLICK TO SEE MORE </h4>
              <br></br>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel" interval={5500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689568891/1_qaohd6.png"
            alt="Image One"
          />
          <div className="carousel-description">
            <br></br>

            <h3 className="reg">First Project with React</h3>
            <a href="/bootcamp">
              <h4 className="title"> CLICK TO SEE MORE </h4>
              <br></br>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel" interval={5500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569152/family_hhz2gm.png"
            alt="Image Two"
          />
          <div className="carousel-description">
            <br></br>

            <h3 className="reg">Dynamic Family Tree</h3>
            <a href="/family">
              <h4 className="title"> CLICK TO SEE MORE </h4>
              <br></br>
            </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
