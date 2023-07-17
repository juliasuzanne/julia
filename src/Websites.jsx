import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export function Websites() {
  return (
    <div style={{ display: "block", maxWidth: "68vw", paddingBottom: "10vh", height: "80vh", padding: 10 }}>
      <Carousel>
        <Carousel.Item className="carousel" interval={5500}>
          <img className="d-block w-100" src="/src/assets/images/1.png" alt="Image One" />
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
          <img className="d-block w-100" src="/src/assets/website/family.png" alt="Image Two" />
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
          <img className="d-block w-100" src="/src/assets/website/kate.png" alt="Image Two" />
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
