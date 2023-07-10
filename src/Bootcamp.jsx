import { useState } from "react";
import { Modal } from "./Modal";
import { FooterDefault } from "./FooterDefault";

export function Bootcamp() {
  const [currentImage, setCurrentImage] = useState("");

  const [textDescription, setTextDescription] = useState();
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleHideImage = () => {
    setShowImage(false);
  };

  return (
    <div>
      <h1 className="sig-text"> Experiments with React</h1>
      <h4 className="sig-text"> POINT AND CLICK STYLE INTERACTION WITH ORIGINAL ARTWORK</h4>
      <hr></hr>
      <br></br>
      <p className="fonted-modal">
        <p> Built with React and Ruby on Rails, deployed with Fly.io and Netlify</p>
        <p>
          I graduated from Actualize Coding Bootcamp in December of 2022. We each made a capstone project showcasing
          what we learned and what we are interested in. This is the project I created. I hope you like it!
        </p>
      </p>
      <div id="video">
        <iframe
          className="websitevideo"
          controls="1"
          src="/src/assets/images/actualize-capstone.mp4"
          title="video player"
        ></iframe>
      </div>
      <p className="fonted-modal">
        Features an inventory system, points tracking, users can create items from back room, mini-games and puzzles,
        pop-up dialog system interface, hidden 3D objects, triggers that play sounds or toggle appearances of images and
        buttons, backend accessibility for development{" "}
      </p>
      <Modal show={showImage} close={handleHideImage}>
        <img id="modalImage" src={currentImage} />
        <p className="fonted-modal"> {textDescription} </p>
      </Modal>
      <br></br>
      <h4 className="header">Click images below for more information</h4>
      <div className="games_images">
        <img
          className="game_image"
          id="two"
          src="/src/assets/images/8.png"
          onClick={() => {
            setCurrentImage("/src/assets/images/8.png");
            handleShowImage();
            setTextDescription(
              "This is an example of one of the backend interfaces I built so that I could edit the database live via the web browser."
            );
          }}
        />
        <img
          className="game_image"
          id="two"
          src="/src/assets/images/9.png"
          onClick={() => {
            setCurrentImage("src/assets/images/9.png");
            handleShowImage();
            setTextDescription(
              "This is a mini-game, snake. An array updates live to detect collisions with the 'apple', change direction and length of the snake, and points earned are connected to the database, saving points to the current user."
            );
          }}
        />
        <img
          className="game_image"
          id="one"
          src="/src/assets/images/1.png"
          onClick={() => {
            setCurrentImage("/src/assets/images/1.png");
            handleShowImage();
            setTextDescription("Showing here the modal that reveals a dialog box to interact with the cashier.");
          }}
        />
        <img
          className="game_image"
          id="two"
          src="/src/assets/images/2.png"
          onClick={() => {
            setCurrentImage("/src/assets/images/2.png");
            handleShowImage();
            setTextDescription(
              "Showing a detail of the puzzle to fix the electrical wires and then turn on the lights. I used buttons and conditionals to achieve this. Completing this task earns the user 500 points, and the game will remember that this was done via a boolean variable assigned to each user."
            );
          }}
        />
        <img
          className="game_image"
          id="two"
          src="/src/assets/images/4.png"
          onClick={() => {
            setCurrentImage("/src/assets/images/4.png");
            handleShowImage();
            setTextDescription(
              "I had a lot of fun experimenting with adding interactive 3D models created in Blender to the site using Three.js. I'm looking for ways to do more of this."
            );
          }}
        />
        <img
          className="game_image"
          id="two"
          src="/src/assets/images/6.png"
          onClick={() => {
            setCurrentImage("/src/assets/images/6.png");
            handleShowImage();
            setTextDescription(
              "Detail showing the cataloging system for the back room inventory where users can convert items into artifacts for sale in the main room, to be purchased and then added to a user's inventory (if they have enough points)!"
            );
          }}
        />
      </div>
      <FooterDefault />
    </div>
  );
}
