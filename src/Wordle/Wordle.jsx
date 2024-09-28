import { useSignal } from "@preact/signals-react";
import { words } from "./words";
import { answers } from "./answers";
import Guess from "./Guess";
import "./wordle.css";
import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Header } from "../Header";

export default function Wordle() {
  const newIndex = Math.floor(Math.random() * answers.length - 1);
  const [alphabet, setAlphabet] = useState("abcdefghijklmnopqrstuvwxyz".split(""));
  const [isExploding, setIsExploding] = useState(false);
  const [win, setWin] = useState(false);
  const [word, setWord] = useState(answers[newIndex]);
  const [done, setDone] = useState(false);
  const [currentGuess, setCurrentGuess] = useState("");
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [currentGuessCount, setCurrentGuessCount] = useState(0);
  const [guessesAccuracy, setGuessesAccuracy] = useState(["xxxxx", "xxxxx", "xxxxx", "xxxxx", "xxxxx", "xxxxx"]);
  const [guesses, setGuesses] = useState(["     ", "     ", "     ", "     ", "     ", "     "]);
  const [currentError, setCurrentError] = useState("");
  const [guessContains, setGuessContains] = useState([]);

  function makeCaseSensitive(word) {
    let firstLetter = word.substring(0, 1).toUpperCase();
    let restWord = word.substring(1, word.length).toLowerCase();
    return firstLetter + restWord;
  }

  const checkGuess = () => {
    console.log("case sensitive: " + makeCaseSensitive(currentGuess));

    if (guesses.includes(currentGuess)) {
      setCurrentError("Already Guessed!");
      console.log("already guessed!");
      setCurrentGuess("");
      setGuessContains([]);
    } else if (currentGuess.length === 5) {
      if (words.includes(currentGuess.toLowerCase())) {
        let newAccuracyTracker = "";
        guesses[currentGuessCount] = currentGuess;
        for (let i = 0; i < 5; i++) {
          if (word[i] === currentGuess[i]) {
            console.log("g");
            newAccuracyTracker += "g";
          } else if (word.includes(currentGuess[i])) {
            console.log("y");
            newAccuracyTracker += "y";
          } else if (!word.includes(currentGuess[i])) {
            console.log("r");
            newAccuracyTracker += "r";
            if (!wrongGuesses.includes(currentGuess[i])) {
              setWrongGuesses((prev) => [...prev, currentGuess[i]]);
            }
          }
        }
        guessesAccuracy[currentGuessCount] = newAccuracyTracker;
        if (word === currentGuess) {
          setDone(true);
          setWin(true);
          setCurrentError("You got it!");
          setCurrentGuess("");
          setGuessContains([]);
        } else {
          setCurrentError("not quite...");
          setCurrentGuessCount((prev) => prev + 1);
          console.log("CURRENT COUNT: " + currentGuessCount);
          if (currentGuessCount >= 5) {
            setCurrentError("You lose : (");
            setDone(true);
            setTimeout(() => resetGame(), 2200);
          }
          setCurrentGuess("");
          setGuessContains([]);
        }
      } else {
        setCurrentError("Not a valid word!");
        setCurrentGuess("");
        setGuessContains([]);
      }
    } else if (currentGuess.length !== 5) {
      console.log("GUESS INCORRECT LENGTH - MUST BE A FIVE LETTER WORD");
      setCurrentError("GUESS INCORRECT LENGTH");
      setCurrentGuess("");
      setGuessContains([]);
    }
  };

  function resetGame() {
    let newIndex = Math.floor(Math.random() * answers.length - 1);
    setWin(false);
    setWord(answers[newIndex]);
    setCurrentGuess("");
    setWrongGuesses([]);
    setCurrentGuessCount(0);
    setGuessesAccuracy(["xxxxx", "xxxxx", "xxxxx", "xxxxx", "xxxxx", "xxxxx"]);
    setGuesses(["     ", "     ", "     ", "     ", "     ", "     "]);
    setCurrentError("");
    setGuessContains([]);
    setDone(false);
  }

  return (
    <div>
      <Header currentPage={"home"} />

      <br></br>
      <div className="confetti">{win && <ConfettiExplosion height="100vh" width={5000} particleCount="200" />}</div>

      <div>
        {guesses.map((guess, i) => {
          return <Guess key={i} guess={guess} guessAccuracy={guessesAccuracy[i]} />;
        })}
        <br></br>
        {/* <h1>{currentGuess.value}</h1> */}
        <br></br>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            checkGuess();
            console.log(currentGuess);
          }}
        >
          <input
            maxLength={5}
            className="guessSpace"
            disabled={done}
            value={currentGuess}
            onChange={(e) => {
              setCurrentGuess(e.target.value);
              setGuessContains(wrongGuesses.filter((letter) => e.target.value.includes(letter)));
            }}
          ></input>

          <br></br>
          <button
            className="wordleButton"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              checkGuess();
              console.log(currentGuess);
            }}
          >
            GUESS
          </button>
        </form>
        <button className="wordleButton" hidden={!done} onClick={resetGame}>
          RESET
        </button>
        <p className="wordleMessageNormal">{currentError}</p>
      </div>
      <div>
        <div className="width-wordle">
          <br></br>
          <br></br>
          <h2>possible letters:</h2>
          {alphabet.map((letter) =>
            wrongGuesses.includes(letter) ? <span></span> : <span className="availableLetters">{letter}</span>
          )}
          <br></br>
          <br></br>
          {guessContains.length > 0 ? (
            <p className="width-warning">
              {" "}
              Warning! Your guess contains the following disproved letters: <br></br>
              <br></br>
              <p>
                {guessContains.map((letter) => (
                  <span className="availableLettersRed"> {letter} </span>
                ))}
              </p>
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
}
