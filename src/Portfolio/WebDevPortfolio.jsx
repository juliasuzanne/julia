import "../CSS/Portfolio.css";
import { useEffect, useState } from "react";
import { OtherProjects } from "./OtherProjects";
import { DeployedSites } from "./DeployedSites";
import { AboutMeDev } from "./AboutMeDev";
import { DevJourney } from "./DevJourney";

export function WebDevPortfolio() {
  const [worldDesignShow, setWorldDesignShow] = useState(false);
  const [deployShow, setDeployShow] = useState(false);
  const [aboutMeShow, setAboutMeShow] = useState(true);
  const [otherProjectsShow, setOtherProjectsShow] = useState(false);
  const [programmingShow, setProgrammingShow] = useState(false);

  const handleShowAboutMe = () => {
    setAboutMeShow(true);
    setProgrammingShow(false);
    setOtherProjectsShow(false);
    setDeployShow(false);
  };

  const handleShowDeploy = () => {
    setDeployShow(true);
    setAboutMeShow(false);
    setProgrammingShow(false);
    setOtherProjectsShow(false);
  };

  const handleShowOtherProjects = () => {
    setOtherProjectsShow(true);
    setProgrammingShow(false);
    setDeployShow(false);
    setAboutMeShow(false);
  };
  const handleShowProgramming = () => {
    setProgrammingShow(true);
    setAboutMeShow(false);
    setDeployShow(false);
    setOtherProjectsShow(false);
  };

  return (
    <div>
      <div className="portfolioButtons">
        <button id="purpleButton" className="button" onClick={handleShowAboutMe}>
          About Me
        </button>
        <button id="orangeButton" className="button" onClick={handleShowDeploy}>
          Deployed Sites
        </button>
        <button id="greenButton" className="button" onClick={handleShowProgramming}>
          Dev Journey
        </button>
        <button id="pinkButton" className="button" onClick={handleShowOtherProjects}>
          Other Coding Projects
        </button>
      </div>

      <div>
        <AboutMeDev show={aboutMeShow}></AboutMeDev>
        <DevJourney show={programmingShow}></DevJourney>
        <DeployedSites show={deployShow}></DeployedSites>
        <OtherProjects show={otherProjectsShow}></OtherProjects>
      </div>
    </div>
  );
}
