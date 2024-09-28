import { Unity, useUnityContext } from "react-unity-webgl";
import "./CSS/thesisartwalk.css";
import { useEffect, useState } from "react";
import { ImagesModal } from "./ImagesModal";
import React from "react";
import { Header } from "./Header";

export function ThesisArtWalk() {
  useEffect(() => {
    document.title = "Game Development Projects";
  }, []);

  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "/SignsOfLifeWEBGLMac/Build/SignsOfLifeWEBGLMac.loader.js",
  //   dataUrl: "/SignsOfLifeWEBGLMac/Build/SignsOfLifeWEBGLMac.data",
  //   frameworkUrl: "/SignsOfLifeWEBGLMac/Build/SignsOfLifeWEBGLMac.framework.js",
  //   codeUrl: "/SignsOfLifeWEBGLMac/Build/SignsOfLifeWEBGLMac.wasm",
  // });
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
      <Header currentPage={"currentgame"} />
      <ImagesModal
        show={isModalVisible}
        image={currentImage}
        description={currentDescription}
        close={handleHideModal}
      ></ImagesModal>
      <div className="artwalkdemoimage-container">
        <img
          onClick={() => {
            handleSetCurrentImage(
              " https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303352/Screen_Shot_2024-05-09_at_8.58.44_PM_l4ksdv.png"
            );
            handleSetCurrentDescription("");
            handleShowModal();
          }}
          className="artwalkdemoimage"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303352/Screen_Shot_2024-05-09_at_8.58.44_PM_l4ksdv.png"
        ></img>
        <img
          onClick={() => {
            handleSetCurrentImage(
              " https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303347/Screen_Shot_2024-05-09_at_9.00.02_PM_iopayf.png"
            );
            handleSetCurrentDescription("");
            handleShowModal();
          }}
          className="artwalkdemoimage"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303347/Screen_Shot_2024-05-09_at_9.00.02_PM_iopayf.png"
        ></img>
        <img
          onClick={() => {
            handleSetCurrentImage(
              "https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303387/Screen_Shot_2024-05-09_at_8.56.58_PM_z30hfr.png"
            );
            handleSetCurrentDescription("");
            handleShowModal();
          }}
          className="artwalkdemoimage"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303387/Screen_Shot_2024-05-09_at_8.56.58_PM_z30hfr.png"
        ></img>
        <img
          onClick={() => {
            handleSetCurrentImage(
              "https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303342/Screen_Shot_2024-05-09_at_8.35.24_PM_fcaz0y.png"
            );
            handleSetCurrentDescription("");
            handleShowModal();
          }}
          className="artwalkdemoimage"
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303342/Screen_Shot_2024-05-09_at_8.35.24_PM_fcaz0y.png"
        ></img>

        <img
          onClick={() => {
            handleSetCurrentImage(
              "     https://res.cloudinary.com/dytb4ayqj/image/upload/v1715300992/Screen_Shot_2024-05-09_at_8.29.35_PM_noiqsi.png"
            );
            handleSetCurrentDescription("");
            handleShowModal();
          }}
          className="artwalkdemoimage"
          src="     https://res.cloudinary.com/dytb4ayqj/image/upload/v1715300992/Screen_Shot_2024-05-09_at_8.29.35_PM_noiqsi.png"
        ></img>
      </div>
      <p className="topStatement">
        {""}I'm proud to present the version of my thesis project, Signs Of Life -
        <strong> a Unity built 2D point and click game </strong>- I showed at MICA's 2024 Art Walk. This game is still
        in progress, but playable with an ending. Please enjoy and <strong>stay tuned </strong>for the final, published
        version on Steam!{" "}
        <a href="/thesisblog">
          <strong>(I kept a blog throughout the process of making this game, read it by clicking here.)</strong>
        </a>
      </p>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="title">Trailer of Game in Development</h2>
            <div id="videogame">
              <iframe className="websitevideogame" controls="1" src="/soundflowers_1.mp4" title="video player"></iframe>
              <a href="https://store.steampowered.com/app/3102740/Signs_Of_Life__Part_One/">
                <h4 className="heading"> Visit the Steam Store Page</h4>
              </a>
            </div>
            <br></br>
            <br></br>
          </div>

          <div className="col-lg-6">
            <div className="borderNewspaper">
              <h2 className="title">Other Games</h2>
              <br></br>
              <a href="/tarot">
                <p className="aboutPBold">Tarot Card Reading</p>
              </a>
              <a href="/wordle">
                <p className="aboutPBold">Wordle</p>
              </a>
              {/* <a href="/big5">
                <p className="aboutPBold">Personality Quiz</p>
              </a> */}
              <a href="/snake">
                <p className="aboutPBold">Snake Mimic built with HTML/React and JS</p>
              </a>
              <a href="/unity">
                <p className="aboutPBold">Shooter Style Mini Game Built with Unity</p>
              </a>
              <a href="/draft">
                <p className="aboutPBold">Point and Click Demo</p>
              </a>
              <br></br>
              <br></br> <br></br>
              <br></br>
              <br></br>
              {/* <Unity unityProvider={unityProvider} /> */}
            </div>
          </div>
        </div>
      </div>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <div className="col-lg-8" id="additional">
        <h3 className="title">About Signs Of Life</h3>

        <p className="aboutP">
          This game represents a time of reflection and reconnection with myself. After taking an eight year hiatus
          between dropping out and coming back to finish my Bachelor's degree, I have a different outlook on art and my
          relationship to that creative side of myself. It was very important to me to have this outlet in my childhood
          and adolescence, and I'd like to try to find a place for it in my adult life while still incorporating a lot
          of the skills and fulfillment I get from more technical work that I practice now.{" "}
        </p>
        <p className="aboutP">
          This game includes many writings, drawings, and ideas from the time in my life when I first left school - when
          games were very important to a sense of connection in a world that felt increasingly difficult to navigate and
          exist in. I hope that it facilitates a meditative, controlled environment for your thoughts as those games did
          for me, and a sense of discovery as you explore and interact with the many items and characters.
        </p>
      </div>
      {/* <p>(Below) Image of game installation in Art Walk gallery at MICA May 2024.</p>
      <img
        className="showimageMICA"
        src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1717687388/showimage_ciw9mu.png"
      ></img> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
