import { ContactCircle } from "./ContactCircle";
import { useEffect, useState } from "react";
import { ImagesModal } from "./ImagesModal";
import React from "react";
import "./CSS/paintings.css";

export function Paintings() {
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
      <p>This page under construction - please check back</p>

      <p>
        {" "}
        <em>CLICK IMAGES FOR DESCRIPTION AND CLOSE-UP </em>
      </p>

      <ImagesModal
        show={isModalVisible}
        image={currentImage}
        description={currentDescription}
        close={handleHideModal}
      ></ImagesModal>

      <h2 className="grid-cat-header"> Media </h2>

      <div className="grid-container-paint" id="logo-container">
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1718068267/Screen_Shot_2024-06-10_at_9.10.16_PM_ganimk.png"
              );
              handleSetCurrentDescription(
                "Latest album cover for Delial - check them out on bandcamp. Released Valentine's Day, 2024."
              );

              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718068267/Screen_Shot_2024-06-10_at_9.10.16_PM_ganimk.png"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1718068267/Screen_Shot_2024-06-10_at_9.10.39_PM_hstah8.png"
              );
              handleSetCurrentDescription("Album cover for Delial - check them out on bandcamp. Released August 2020.");

              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718068267/Screen_Shot_2024-06-10_at_9.10.39_PM_hstah8.png"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "  https://res.cloudinary.com/dytb4ayqj/image/upload/v1718068267/Screen_Shot_2024-06-10_at_9.10.27_PM_b0zdgo.png"
              );
              handleSetCurrentDescription(
                "Album cover for Delial - check them out on bandcamp. Released November 2019."
              );

              handleShowModal();
            }}
            src="  https://res.cloudinary.com/dytb4ayqj/image/upload/v1718068267/Screen_Shot_2024-06-10_at_9.10.27_PM_b0zdgo.png"
          ></img>
        </div>

        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1717689814/scienceofsleepposter_iqpi4c.png"
              );
              handleSetCurrentDescription(
                "This was a simple exercise to create a movie poster for one of my favorites - The Science Of Sleep."
              );

              handleShowModal();
            }}
            src="   https://res.cloudinary.com/dytb4ayqj/image/upload/v1717689814/scienceofsleepposter_iqpi4c.png"
          ></img>
        </div>
      </div>

      <h2 className="grid-cat-header"> Logo Design </h2>
      <div className="grid-container-paint" id="logo-container">
        <div className="grid-item" id="logo">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "  https://res.cloudinary.com/dytb4ayqj/image/upload/v1718132522/mountblanco_a2hqjo.png"
              );
              handleSetCurrentDescription(
                "Exercise from Daily Logo Challenge - create a logo for a fictitious ski mountain called Mount Blanco. This is my third day doing daily logo challenge - I've decided to read the prompt in the morning, think about it in the back of my mind, and then set a timer for 30 minutes to actually create the logo."
              );
              handleShowModal();
            }}
            src="    https://res.cloudinary.com/dytb4ayqj/image/upload/v1718132522/mountblanco_a2hqjo.png"
          ></img>
        </div>
        <div className="grid-item" id="logo">
          <img
            onClick={() => {
              handleSetCurrentImage(
                " https://res.cloudinary.com/dytb4ayqj/image/upload/v1718058923/dailylogopractice-04_sv9r8s.png"
              );
              handleSetCurrentDescription(
                "Exercise from Daily Logo Challenge - create a logo for a fictitious company called Autonome which manufactures and sells self-driving cars."
              );
              handleShowModal();
            }}
            src="   https://res.cloudinary.com/dytb4ayqj/image/upload/v1718058923/dailylogopractice-04_sv9r8s.png"
          ></img>
        </div>
        <div className="grid-item" id="logo">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "  https://res.cloudinary.com/dytb4ayqj/image/upload/v1718060101/mmlightnew_dp2fxs_cuqzml.png"
              );
              handleSetCurrentDescription(
                "Created this logo for a fictitious grocer called Modern Markets for a marketing demo project at ecrebocpr.com."
              );
              handleShowModal();
            }}
            src="        https://res.cloudinary.com/dytb4ayqj/image/upload/v1718060101/mmlightnew_dp2fxs_cuqzml.png"
          ></img>
        </div>

        <div className="grid-item" id="logo">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "  https://res.cloudinary.com/dytb4ayqj/image/upload/v1718058924/dailylogopractice-07_dbqw79.png"
              );
              handleSetCurrentDescription(
                "Exercise from Daily Logo Challenge - create a wordmark logo for a fictitious fashion brand."
              );
              handleShowModal();
            }}
            src="   https://res.cloudinary.com/dytb4ayqj/image/upload/v1718058924/dailylogopractice-07_dbqw79.png"
          ></img>
        </div>
        <div className="grid-item" id="logo">
          <img
            onClick={() => {
              handleSetCurrentImage(
                " https://res.cloudinary.com/dytb4ayqj/image/upload/v1718059646/logotransparentblack_plnme7.png"
              );
              handleSetCurrentDescription(
                "Logo created for my sister's band Delial, named from her favorite book, House of Leaves."
              );
              handleShowModal();
            }}
            src=" https://res.cloudinary.com/dytb4ayqj/image/upload/v1718059646/logotransparentblack_plnme7.png"
          ></img>
        </div>
        <div className="grid-item" id="logo">
          <img
            onClick={() => {
              handleSetCurrentImage(
                " https://res.cloudinary.com/dytb4ayqj/image/upload/v1718064168/tazzacup_awdxpq.png"
              );
              handleSetCurrentDescription(
                "Exercise from Daily Logo Challenge - create a logo for a fictitious coffee company called Tazza. Better mockup coming soon, this was an experiment I used during the design process to evaluate a few versions I had created. Incidentally there is a chocolate factory called Taza here in Somerville, MA which comes highly recommended."
              );
              handleShowModal();
            }}
            src="  https://res.cloudinary.com/dytb4ayqj/image/upload/v1718058923/dailylogopractice-03_g19mtq.png"
          ></img>
        </div>

        <div className="grid-item" id="logo">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1718059855/gtslogoblack_gsv3ku.png"
              );
              handleSetCurrentDescription(
                "Logo created for a boutique recruitment firm, Growth Talent Solutions. See the website I built at growthtalentsolutions.biz."
              );
              handleShowModal();
            }}
            src=" https://res.cloudinary.com/dytb4ayqj/image/upload/v1718059855/gtslogoblack_gsv3ku.png"
          ></img>
        </div>
        <div className="grid-item" id="logo">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "  https://res.cloudinary.com/dytb4ayqj/image/upload/v1718058923/dailylogopractice-02_ankw78.png"
              );
              handleSetCurrentDescription(
                "Exercise from Daily Logo Challenge - create a playful logo for a fictitious  hot air balloon themed company called Lift."
              );
              handleShowModal();
            }}
            src="   https://res.cloudinary.com/dytb4ayqj/image/upload/v1718058923/dailylogopractice-02_ankw78.png"
          ></img>
        </div>
      </div>

      <h2 className="grid-cat-header"> Paintings</h2>

      <div className="grid-container-paint" id="logo-container">
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage("https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688756/parrot_alslzx.png");
              handleSetCurrentDescription("Parrot on cardboard, preserved with resin coat, 7in by 6in");
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688756/parrot_alslzx.png"
          ></img>
        </div>

        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage("https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688755/gull_qxokvt.png");
              handleSetCurrentDescription("Common Gull on canvas, commissioned work - 11in by 14in");
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688755/gull_qxokvt.png"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage("https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688755/spider_x4lagm.png");
              handleSetCurrentDescription("Greenbottle Blue Tarantula on canvas, commissioned work - 20in by 16in");
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688755/spider_x4lagm.png"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage("https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688754/harrier_qc9mf7.png");
              handleSetCurrentDescription("Norther Harrier for Lauren on wood panel, 8in by 13in");
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688754/harrier_qc9mf7.png"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage("https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688754/owl_kbiafn.png");
              handleSetCurrentDescription("Owl for Lauren on cardboard, 7in by 7in");
              handleShowModal();
            }}
            src=" https://res.cloudinary.com/dytb4ayqj/image/upload/v1717688754/owl_kbiafn.png"
          ></img>
        </div>
      </div>
      <h2 className="grid-cat-header"> Misc Projects</h2>

      <div className="grid-container-paint" id="logo-container">
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1718120854/firstaida_dBRIGHT_o5uevz.png"
              );
              handleSetCurrentDescription(
                "This is a photoshop experiment in product/packaging design. Better mockup images to come. I love A+D ointment, it works so well - I use it as chapstick. I noticed that it was hard to tell the different variations apart, and felt that it could do a redesign. This is my version of their packaging. I took some liberties with the logo that I probably couldn't if this was a true client. I separated and made distinct both letters in the name, to emphasize the two key ingredients. I also made the colors more sophisticated, and kept a serious/scientific theme while making it more eye-popping to pull it off the shelves."
              );
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718120854/firstaida_dBRIGHT_o5uevz.png"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1699978007/From_selection_jv79y8.gif"
              );
              handleSetCurrentDescription(
                "I did some experiments with creating a profile out of these mock-rocks for a stop motion style game I had been experimenting with. See full details on game dev tab, or by going to juliasuzannegrimes.com/draft."
              );
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1699978007/From_selection_jv79y8.gif"
          ></img>
        </div>

        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1718119414/cnc_zhxtmk_gloljy.png"
              );
              handleSetCurrentDescription(
                "CNC milled box with human musculature. Program created with Mastercam. I created this while getting my Associate's in Mechanical Engineering Technology. I really enjoy experiencing how different software describes geometry, between CAD, Adobe, and coordinate based programs like MasterCam. Size approx 2in by 3.5in by 1in."
              );
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718119414/cnc_zhxtmk_gloljy.png"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage("https://res.cloudinary.com/dytb4ayqj/image/upload/v1689568546/jacket_qu5w8p.png");
              handleSetCurrentDescription(
                "Part of my many experiments in creating custom textiles with a hacked Brother Knitting machine using Arduino and AYAB software. I ran out of yarn halfway through, but I was very interested in the trompe-l'oeil trend a la Jean Paul Gaultier and others and felt that this image worked particularly well due to the high contrast and relatively small areas of concentrated black or white."
              );
              handleShowModal();
            }}
            src="      https://res.cloudinary.com/dytb4ayqj/image/upload/v1689568546/jacket_qu5w8p.png
"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage("https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569059/dress_dno977.png");
              handleSetCurrentDescription(
                "Part of my many experiments in creating custom textiles with a hacked Brother Knitting machine using Arduino and AYAB software. This was a project I took on during the start of the COVID pandemic in 2020. I was very interested in the trompe-l'oeil trend a la Jean Paul Gaultier and others. This experiment was a full dress, seen on a mannequin here. Using a serger for the seams worked surprisingly well, but I would like to actually knit patterned pieces together in the future if I can muster the patience and time."
              );
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569059/dress_dno977.png"
          ></img>
        </div>
        <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage("https://res.cloudinary.com/dytb4ayqj/image/upload/v1718119500/kntting_wqoyrz.png");
              handleSetCurrentDescription(
                "This is more description/process oriented documentation of how AYAB works. Taking this selfie of me and converting it into a black and white pixel image, then sending each signal to the computer in the knitting machine to send the needles out and in depending on the selected color. Notice how the pixelated image is elongated; this is a reaction to the tension created by the yarn which causes the image to condense once knit. Notice also the subtle pattern overlaid on the patches that would otherwise be white - with too long a series of a single color in a knit row, the yarn becomes tangled not being tied in for too long which creates the need for a custom pattern to overlay. I experimented with a few different patterns created in GIMP for this purpose, I found this one to be least distracting from the image."
              );
              handleShowModal();
            }}
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1718119500/kntting_wqoyrz.png"
          ></img>
        </div>
        {/* <div className="grid-item">
          <img
            onClick={() => {
              handleSetCurrentImage(
                "https://res.cloudinary.com/dytb4ayqj/image/upload/v1698092240/Screen_Shot_2023-10-23_at_4.17.15_PM_g3p0nh.png"
              );
              handleSetCurrentDescription(
                "I find miniature sets very charming, this was an experiment in creating stop motion style sets for game level design. I especially enjoy experimenting with lighting. Dimensions are approximately 16in by 9in by 8in."
              );
              handleShowModal();
            }}
            src=" https://res.cloudinary.com/dytb4ayqj/image/upload/v1698092240/Screen_Shot_2023-10-23_at_4.17.15_PM_g3p0nh.png"
          ></img>
        </div> */}
      </div>

      {/* <div className="paintings_container" id="logo-container">
        <img width="80%" src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569244/paintings_issjv6.jpg" />
      </div>
      <br></br>
      <br></br>

      <h1 className="heading" id="center-div-painting">
        {" "}
        CNC Milled Box{" "}
      </h1>
      <p className="fonted" id="center-div-painting">
        {" "}
        Custom program to mill this detailed muscular face on a brass box, 3 x 2 x 1.5 inches{" "}
      </p>
      <img width="80%" src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569253/cnc_zhxtmk.jpg" /> */}
    </div>
  );
}
