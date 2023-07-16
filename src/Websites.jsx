import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export function Websites() {
  return (
    <div style={{ display: "block", width: "120vh", paddingBottom: "20vh", maxHeight: "100vh", padding: 30 }}>
      <Carousel>
        <Carousel.Item className="carousel" interval={5500}>
          <img className="d-block w-100" src="/src/assets/images/1.png" alt="Image One" />
        </Carousel.Item>
        <Carousel.Item className="carousel" interval={5500}>
          <img className="d-block w-100" src="/src/assets/website/family.png" alt="Image Two" />
        </Carousel.Item>
        <Carousel.Item className="carousel" interval={5500}>
          <img className="d-block w-100" src="/src/assets/website/kate.png" alt="Image Two" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
