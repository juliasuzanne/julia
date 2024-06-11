import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { ContactCircle } from "./ContactCircle";
import { useEffect, useState } from "react";
import "./CSS/websites.css";
import { ImagesModal } from "./ImagesModal";

export function Websites() {
  useEffect(() => {
    document.title = "Web Development Projects";
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

  const handleShowModal = () => {
    console.log("show modal");
    setIsModalVisible(true);
  };

  const handleSetCurrentImage = (image) => {
    setCurrentImage(image);
  };
  const handleSetCurrentDescription = (description) => {
    setCurrentDescription(description);
  };

  const handleHideModal = () => {
    console.log("Hide modal");
    setIsModalVisible(false);
  };

  return (
    <div>
      <ImagesModal
        show={isModalVisible}
        image={currentImage}
        description={currentDescription}
        close={handleHideModal}
      ></ImagesModal>

      <p>This page under construction</p>
      <p>Most images have links, please click to see the other sites I have built.</p>
      <div className="grid-container">
        <div className="grid-item">
          <a href="http://www.ecrebocpr.com" target="_blank">
            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715312192/Screen_Shot_2024-05-09_at_11.36.27_PM_uzumot.png"></img>
          </a>
        </div>
        <div className="grid-item">
          <a href="http://www.growthtalentsolutions.biz" target="_blank">
            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715312099/Screen_Shot_2024-05-09_at_11.34.53_PM_fqnfdk.png"></img>
          </a>
        </div>
        <div className="grid-item">
          <a href="https://main--growthtalentpathways.netlify.app/" target="_blank">
            <img src=" https://res.cloudinary.com/dytb4ayqj/image/upload/v1717685548/Screen_Shot_2024-06-06_at_10.52.00_AM_qtnlje.png"></img>
          </a>
        </div>
        <div className="grid-item">
          <a href="/bootcamp" target="_blank">
            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689568891/1_qaohd6.png"></img>
          </a>
        </div>

        <div className="grid-item">
          <a href="http://kate-fitz.com" target="_blank">
            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569179/kate_nbw43i.png"></img>
          </a>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1718120057/webdesign2_gdf8qv.png"
              );
              handleSetCurrentDescription("Client web design for Mo Media, communications consulting.");

              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718119819/Desktop_-_2_z9ysww.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
