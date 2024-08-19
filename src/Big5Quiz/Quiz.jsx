import { useSignal } from "@preact/signals";
import { questions } from "./big5questions";
import Question from "./Question";
import Results from "./Results";
import ProgressBar from "./ProgressBar";
import { Chart } from "chart.js";
import { NewCharts } from "./Chart";
import { useState } from "react";

export function Quiz() {
  const [visible, setVisible] = useState(false);
  const [quizQs, setQuizQs] = useState(questions);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [traits, setTraits] = useState({
    agreeableness: 0,
    contientiousness: 0,
    neuroticism: 0,
    extraversion: 0,
    openness: 0,
  });

  function addTrait(trait, reverse, num) {
    if (reverse) {
      num = -num;
    }

    let traitToAdd = trait;
    setTraits({
      ...traits,
      [traitToAdd]: traits[traitToAdd] + num,
    });

    if (currentIndex < quizQs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      console.log("test");
      setVisible(true);
    }
  }

  return (
    <div>
      <h1>What is your Big 5 personality type?</h1>
      <p>
        I like personality tests. Sure, interest in them can be due to an ego driven interest in the self. But I find
        they can also be useful tools for self reflection and understanding others.
      </p>

      <h2>
        Reflect on the statements below to the best of your ability, and then have your results revealed! No sign up,
        data mining, or payment involved.
      </h2>

      {/* <p>EX {traits.value.extraversion} NE {traits.value.neuroticism} CO {traits.value.contientiousness} OP {traits.value.openness} AG {traits.value.agreeableness}</p> */}

      <h3 hidden={visible}>I am someone who...</h3>
      <Question show={visible} question={quizQs[currentIndex]} addToTrait={addTrait} />
      <ProgressBar show={visible} totalProgress={quizQs.length} currentProgress={currentIndex} />
      <Results show={!visible} traits={traits} />
    </div>
  );
}
