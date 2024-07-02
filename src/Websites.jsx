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
      <br></br>
      <h1 className="heading-web">Web Development Projects</h1>
      <p>
        I graduated from Actualize Coding Bootcamp in January 2023 with a certificate in Full-Stack Web Development. I
        am passionate about building stylish, responsive websites. I especially enjoy working with interaction and
        animation, and building a project from concept to execution.
      </p>
      <a href="/contact">
        <p className="contactlink">Need a website built? Have questions? Reach out!</p>
      </a>
      <div className="grid-container-web">
        <div className="grid-item-web" onClick={() => window.open("https://spendpoint.com", "_blank")}>
          <h2 className="websiteHeading">SpendPoint</h2>

          <a href="https://spendpoint.com" target="_blank">
            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719945450/Screen_Shot_2024-07-02_at_2.36.44_PM_octgnm.png"></img>
          </a>
          <ul className="websiteDescription">
            <li>Designed and developed as a one-person team using Node.js, Vite and Adobe Suites.</li>
            <li>Collaborated with marketing executive on formatting and layout as a freelancer.</li>
            <li>Used Interaction Observer API to trigger CSS animations on scroll.</li>
            <li>Responsive design.</li>
            <li>Built with React.js, deployed with Netlify.</li>
            <li>EmailJS contact form</li>
          </ul>
        </div>
        <div className="grid-item-web" onClick={() => window.open("http://www.ecrebocpr.com", "_blank")}>
          <h2 className="websiteHeading">EcreboCPR</h2>

          <a href="http://www.ecrebocpr.com" target="_blank">
            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715312192/Screen_Shot_2024-05-09_at_11.36.27_PM_uzumot.png"></img>
          </a>
          <ul className="websiteDescription">
            <li>Demo site for a receipt printing software company.</li>
            <li>Developed as a one-person team.</li>
            <li>Custom branding for ficticious example grocer.</li>
            <li>Graphic design using Adobe Illustrator and Photoshop.</li>
            <li>Responsive mock app store pages.</li>
            <li>Consistent branding with company website.</li>
            <li>Worked with marketing executive on content and wireframing.</li>
            <li>Built with React.js and Ruby on Rails</li>
            <li>Features integrated, interactive Rive animation.</li>
            <li>Deployed with Netlify.</li>
            <li>Contact form created with EmailJS.</li>
          </ul>
          <p></p>
        </div>

        <div className="grid-item-web" onClick={() => window.open("http://kate-fitz.com", "_blank")}>
          <a href="http://kate-fitz.com" target="_blank">
            <h2 className="websiteHeading">Artist Portfolio Site</h2>

            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569179/kate_nbw43i.png"></img>
          </a>

          <ul className="websiteDescription">
            <li>Kate FitzGerrell portfolio website.</li>
            <li>Developed as a one-person team.</li>
            <li>Ruby on Rails backend made accessible through custom forms through a secure login.</li>
            <li>Collaborative design process with client.</li>
            <li>Deployed with Netlify and Fly.io</li>
          </ul>
        </div>

        <div className="grid-item-web" onClick={() => window.open("/bootcamp", "_blank")}>
          <h2 className="websiteHeading">Actualize Capstone Project</h2>

          <a href="/bootcamp" target="_blank">
            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689568891/1_qaohd6.png"></img>
          </a>
          <ul className="websiteDescription">
            <li>Interactive, point and click style coding bootcamp project.</li>
            <li>Developed as a one-person team.</li>
            <li>User signup and authentication.</li>
            <li>Features Three.js 3D models.</li>
            <li>Built with React.js and Ruby on Rails</li>
            <li>Deployed with Netlify and Fly.io</li>
            <li>User events and settings saved in SQL database.</li>
          </ul>
        </div>

        <div className="grid-item-web" onClick={() => window.open("http://www.growthtalentsolutions.biz", "_blank")}>
          <h2 className="websiteHeading">Growth Talent Solutions</h2>

          <a href="http://www.growthtalentsolutions.biz" target="_blank">
            <img src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1719945556/Screen_Shot_2024-07-02_at_2.39.11_PM_on6zrf.png"></img>
          </a>
          <ul className="websiteDescription">
            <li>One page web presence for boutique recruiting firm.</li>
            <li>Developed as a one-person team.</li>
            <li>Worked directly with client to develop brand identity including logo and style guide.</li>
            <li>Built with React.js and Ruby on Rails</li>
            <li>Assisted with creating and editing verbiage and messaging. </li>
            <li>Features an on-scroll animation.</li>
            <li>Deployed with Netlify.</li>
            <li>Contact form created with Mailtrap.</li>
          </ul>
        </div>

        <div className="grid-item-web">
          <h2 className="websiteHeading">Website Design</h2>

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
          <ul className="websiteDescription">
            <li>Design created on Figma for communications consulting firm.</li>
            <li>Modify logos and images with Adobe Suites.</li>
            <li>Collaborative design process with client.</li>
            <li>Responsive styles included.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
