import "./wordle.css";

export default function Guess({ guess, guessAccuracy }) {
  let splitGuess = guess.split("");
  console.log(splitGuess);
  console.log("GUESS ACCURACY" + guessAccuracy);

  return (
    <div className="letterBlock">
      {splitGuess.map((letter, i) => {
        return (
          <div key={i} className={`${guessAccuracy[i]} letter`}>
            {letter}
          </div>
        );
      })}
    </div>
  );
}
