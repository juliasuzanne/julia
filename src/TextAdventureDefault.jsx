import axios from "axios";
import { useState, useEffect } from "react";

export function TextAdventureDefault(props) {
  console.log(props);
  let [text, setText] = useState("Hello, good to see you.");
  let [step, setStep] = useState(0);
  let [buttonText, setButtonText] = useState("Who are you?");
  let [buttonTextTwo, setButtonTextTwo] = useState("Can you teleport me?");

  const handleChangeText = () => {
    if (step === 0) {
      setText("Ah, the age old question.");
      setButtonText("Do you not know?");
      setButtonTextTwo("Ah, yes.");
      setStep(1);
    } else if (step === 1) {
      setText("I know as much as you know anything.");
      setButtonText("I know not anything well.");
      setButtonTextTwo("Okay.");
      setStep(2);
    } else if (step === 2) {
      props.onClose();
    } else if (step === 3) {
      window.open("/tarot", "_self");
    } else if (step === 5) {
      props.onClose();
    } else if (step === 6) {
      props.onClose();
    } else if (step === 7) {
      props.onClose();
    } else if (step === 4) {
      props.onClose();
    } else if (step === 11) {
      props.onClose();
    }
  };

  const handleChangeTextTwo = () => {
    if (step === 0) {
      setText("Yes, of course. Where would you like to go?");
      setButtonText("I want my fortune read.");
      setButtonTextTwo("I want to see websites.");
      setStep(3);
    } else if (step === 1) {
      setText("Click on them once they are revealed and you can read all about it. The interpretation is up to you.");
      setButtonText("I read it but I still don't understand.");
      setButtonTextTwo("I'm tired.");
      setStep(2);
    } else if (step === 2) {
      props.onClose();
    } else if (step === 3) {
      window.open("/family", "_self");
    } else if (step === 4) {
      props.onClose();
    } else if (step === 5) {
      setText("It's okay to not like some things. Everyone has different tastes... I guess yours are bad.");
      setButtonText("Okay, I accept it.");
      setButtonTextTwo("Thank you.");
      setStep(11);
    } else if (step === 6) {
      setText("You can email my boss at julia.s.grimes@gmail.com");
      setButtonText("Okay.");
      setButtonTextTwo("No, I won't.");
      setStep(8);
    } else if (step === 8) {
      props.onClose();
    } else if (step === 11) {
      props.onClose();
    }
  };

  return (
    <div className="helping">
      <p className="text-bubble">{text}</p>
      <button className="plain" onClick={handleChangeText}>
        {" "}
        &rarr; {buttonText}
      </button>
      <br></br>
      <button className="plain" onClick={handleChangeTextTwo}>
        {" "}
        &rarr; {buttonTextTwo}
      </button>

      {/* <p>{points}</p>
      <button className="buttonGrey" onClick={handleGetPoints}>
        {" "}
        submit score{" "}
      </button> */}
    </div>
  );
}
