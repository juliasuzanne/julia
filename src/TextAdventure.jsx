import axios from "axios";
import { useState, useEffect } from "react";

export function TextAdventure(props) {
  console.log(props);
  let [text, setText] = useState("Hello, welcome.");
  let [step, setStep] = useState(0);
  let [buttonText, setButtonText] = useState("What is going on here?");
  let [buttonTextTwo, setButtonTextTwo] = useState("How does this work?");

  const handleChangeText = () => {
    if (step === 0) {
      setText("Click on each card to reveal your past, present and future. It's a three card spread ...");
      setButtonText("What's a three card spread?");
      setButtonTextTwo("How do I know what the cards mean?");
      setStep(1);
    } else if (step === 1) {
      setText(
        "This 3 card tarot spread is a quick and simple way to get insight into your past, present and future. Focus on a particular theme before you turn them over, if you wish."
      );
      setButtonText("How do I interpret the cards?");
      setButtonTextTwo("I'm getting tired now.");
      setStep(2);
    } else if (step === 2) {
      setText(`Look closer at each card and ask yourself what it represents.
      Some possibilities: a person in your life, a situation, your emotions/feelings, your thoughts/mindset, or a possible solution.`);
      setButtonText("Okay, that makes sense.");
      setButtonTextTwo("I don't like this.");
      setStep(5);
    } else if (step === 3) {
      props.onClose();
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
      setText("Just keep clicking until you realize something.");
      setButtonText("Okay.");
      setButtonTextTwo("That's not helpful.");
      setStep(3);
    } else if (step === 1) {
      setText("Click on them once they are revealed and you can read all about it. The interpretation is up to you.");
      setButtonText("I read it but I still don't understand.");
      setButtonTextTwo("I'm tired.");
      setStep(2);
    } else if (step === 2) {
      setText("Please tell me if you have any interesting dreams.");
      setButtonText("I don't dream.");
      setButtonTextTwo("I don't know how to contact you.");
      setStep(6);
    } else if (step === 3) {
      setText("Sorry.");
      setStep(4);
      setButtonText("It's okay.");
      setButtonTextTwo("...");
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
