import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./Modal";
import "./CSS/tarot.css";
import { Footer } from "./Footer";
import { tarotcards } from "./tarotcards";
import { Header } from "./Header";

export function Tarot() {
  useEffect(() => {
    document.title = "Tarot Spread";
  }, []);
  let [cards, setCards] = useState([]);

  let [currentCard, setCurrentCard] = useState(true);

  const [showImage, setShowImage] = useState(false);
  const [textDescription, setTextDescription] = useState();
  const [title, setTitle] = useState();

  const [currentImage, setCurrentImage] = useState("");

  const handleShowImage = () => {
    setShowImage(true);
  };

  const handleHideImage = () => {
    setShowImage(false);
  };

  let [card1, setCard1] = useState(true);
  let [card2, setCard2] = useState(true);
  let [card3, setCard3] = useState(true);

  let [cardnum1, setCardNum1] = useState(Math.ceil(Math.random() * 78));
  let [cardnum2, setCardNum2] = useState(Math.ceil(Math.random() * 78));
  let [cardnum3, setCardNum3] = useState(Math.ceil(Math.random() * 78));

  let [randomCard1, setRandomCard1] = useState(Math.ceil(Math.random() * 78));
  let [randomCard2, setRandomCard2] = useState(Math.ceil(Math.random() * 78));
  let [randomCard3, setRandomCard3] = useState(Math.ceil(Math.random() * 78));

  const setCardNums = () => {
    let num1 = cardnum1;
    let num2 = cardnum2;
    let num3 = cardnum3;
    while (num1 === num2 || num2 === num3 || num3 === num1) {
      num1 = Math.ceil(Math.random() * 78);
      num2 = Math.ceil(Math.random() * 78);
      num3 = Math.ceil(Math.random() * 78);
      setCardNum1(num1);
      setCardNum2(num2);
      setCardNum3(num3);
    }
  };

  useEffect(setCardNums, []);

  const handleGenerateNumber1 = () => {
    setRandomCard1(tarotcards[cardnum1]);
    setCard1(false);
  };

  const handleGenerateNumber2 = () => {
    setRandomCard2(tarotcards[cardnum2]);
    setCard2(false);
  };

  const handleGenerateNumber3 = () => {
    setRandomCard3(tarotcards[cardnum3]);
    setCard3(false);
  };

  return (
    <div className="cardy">
      <Header currentPage={"home"} />

      <div className="describe-spread">
        <button
          onClick={() => {
            handleShowImage();
            setTitle("About This Three Card Spread, Past/Present/Future");
            setCurrentCard(
              "This 3 card tarot spread is a quick and simple way to get insight into the past, present and future. There are many variations on the 3 card tarot spread, including the past life tarot spread, but this is one of the most common spreads.        "
            );
            setTextDescription(
              `      
            Look closer at each card and ask yourself what it represents.
  
            Some possibilities are a person in your life,
            a situation,
            your emotions/feelings,
            your thoughts/mindset, or
            a possible solution. `
            );
          }}
        >
          {/* <h2 className="heading" id="center-div">
            {" "}
            ABOUT{" "}
          </h2> */}
        </button>
      </div>
      <div className="layout">
        <div className="label-div">
          {/* <div className="label-div"> */}
          <h3
            className="tarot"
            onClick={() => {
              handleShowImage();
              setTitle("About: Past");
              setCurrentCard(
                "Energies and events that are in the past yet still effect you  is going on for you right now."
              );
              setTextDescription(`
            How your past either holds you back (blocks) or helps you move forward (growth)
            What you need to take from the past and use to your advantage today.`);
            }}
          >
            Past
          </h3>
          <h3
            className="tarot"
            onClick={() => {
              handleShowImage();
              setTitle("About: Present");
              setCurrentCard("What is going on for you right now.");
              setTextDescription(`The energy of the present moment.
              Opportunities and challenges that are currently being presented to you.`);
            }}
          >
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Present
          </h3>
          <h3
            className="tarot"
            onClick={() => {
              handleShowImage();
              setTitle("About: Future");
              setCurrentCard("Outcome of situation");
              setTextDescription(`
            The direction that things seem to be moving in, or what you are manifesting.`);
            }}
          >
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Future
          </h3>
        </div>

        {/* </div> */}
      </div>
      <div className="card-div">
        <div id="pad1">
          <button
            className="button-card"
            id="card"
            onClick={() => {
              if (card1) {
                handleGenerateNumber1();
              } else {
                // setCurrentImage("/images/8.png");
                handleShowImage();
                setTitle("Past");
                setCurrentCard(randomCard1.name);
                setTextDescription(randomCard1.description);
              }
            }}
          >
            <img id="symbol" src={randomCard1.image} />
          </button>
        </div>

        <div className="card-div">
          <div id="pad2">
            <button
              id="card"
              className="button-card"
              onClick={() => {
                if (card2) {
                  handleGenerateNumber2();
                } else {
                  // setCurrentImage("/images/8.png");
                  handleShowImage();
                  setTitle("Present");
                  setCurrentCard(randomCard2.name);

                  setTextDescription(randomCard2.description);
                }
              }}
            >
              {" "}
              <img id="symbol" src={randomCard2.image} />
            </button>
          </div>

          <div id="pad3">
            <button
              id="card"
              className="button-card"
              onClick={() => {
                if (card3) {
                  handleGenerateNumber3();
                } else {
                  // setCurrentImage("/images/8.png");
                  handleShowImage();
                  setTitle("Future");
                  setCurrentCard(randomCard3.name);
                  setTextDescription(randomCard3.description);
                }
              }}
            >
              {" "}
              <img id="symbol" src={randomCard3.image} />
            </button>
          </div>
        </div>
      </div>

      <Modal close={handleHideImage} show={showImage}>
        {/* <img id="modalImage" src={currentImage} /> */}
        <h3 className="tarot"> {title} </h3>
        <p id="p-card"> {currentCard} </p>
        <p id="p-card"> {textDescription} </p>
      </Modal>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer></Footer>
    </div>
  );
}
