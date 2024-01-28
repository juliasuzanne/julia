import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { ContactCircle } from "./ContactCircle";

export function Websites() {
  return (
    <div
      style={{ display: "inline-block", maxWidth: "68vw", paddingBottom: "10vh", height: "80vh", paddingTop: "10vh" }}
    >
      <ContactCircle></ContactCircle>
      <Carousel>
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
              <h4> CLICK TO SEE MORE </h4>
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
              <h4> CLICK TO SEE MORE </h4>
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
            <h3 className="reg"> Portfolio project for Kate FitzGerrell</h3>
            <a href="/kate">
              <h4> CLICK TO SEE MORE </h4>
              <br></br>
            </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
