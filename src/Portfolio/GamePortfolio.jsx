import "../CSS/Portfolio.css";
import { AboutMe } from "./AboutMe";
import { WorldDesign } from "./WorldDesign";
import { PlayableGames } from "./PlayableGames";
import { ProgrammingJourney } from "./ProgrammingJourney";
import { CharacterDesign } from "./CharacterDesign";

import { useEffect, useState } from "react";

export function GamePortfolio() {
  const [worldDesignShow, setWorldDesignShow] = useState(false);
  const [characterShow, setCharacterShow] = useState(false);
  const [aboutMeShow, setAboutMeShow] = useState(true);
  const [playableShow, setPlayableShow] = useState(false);
  const [programmingShow, setProgrammingShow] = useState(false);

  const handleShowAboutMe = () => {
    setAboutMeShow(true);
    setWorldDesignShow(false);
    setCharacterShow(false);
    setProgrammingShow(false);
    setPlayableShow(false);
  };

  const handleShowWorldDesign = () => {
    setWorldDesignShow(true);
    setAboutMeShow(false);
    setCharacterShow(false);
    setPlayableShow(false);
    setProgrammingShow(false);
  };
  const handleShowCharacter = () => {
    setCharacterShow(true);
    setWorldDesignShow(false);
    setAboutMeShow(false);
    setPlayableShow(false);
    setProgrammingShow(false);
  };
  const handleShowPlayable = () => {
    setPlayableShow(true);
    setProgrammingShow(false);
    setCharacterShow(false);
    setWorldDesignShow(false);
    setAboutMeShow(false);
  };
  const handleShowProgramming = () => {
    setProgrammingShow(true);
    setPlayableShow(false);
    setCharacterShow(false);
    setWorldDesignShow(false);
    setAboutMeShow(false);
  };

  return (
    <div>
      <div className="portfolioButtons">
        <button id="pinkButton" className="button" onClick={handleShowWorldDesign}>
          World Design
        </button>
        <button id="redButton" className="button" onClick={handleShowCharacter}>
          Character Creation
        </button>
        <button id="purpleButton" className="button" onClick={handleShowAboutMe}>
          About Me
        </button>
        <button id="orangeButton" className="button" onClick={handleShowPlayable}>
          Playable Game Samples
        </button>
        <button id="greenButton" className="button" onClick={handleShowProgramming}>
          Programming Journey
        </button>
      </div>

      <div>
        <AboutMe show={aboutMeShow}></AboutMe>
        <WorldDesign show={worldDesignShow}></WorldDesign>
        <CharacterDesign show={characterShow}></CharacterDesign>
        <ProgrammingJourney show={programmingShow}></ProgrammingJourney>
        <PlayableGames show={playableShow}></PlayableGames>
      </div>
    </div>
  );
}
