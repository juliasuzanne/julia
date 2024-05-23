import { Tab } from "react-bootstrap";
import "./CSS/tabcontainer.css";
import { TabModal } from "./TabModal";
import { useState } from "react";

export function Tabs() {
  const [show, setShow] = useState(true);

  const toggleVisible = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={toggleVisible}>
        <div id="homebutton">
          <img
            height="70vw"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1711601270/jglogoswim_gecmj4.png
          "
          />
        </div>
      </button>

      <div hidden={show} className="tabContainer">
        <div className="webDevContainer">
          <TabModal label="Web Dev">
            <p>Client Projects:</p>

            <a href="/kate">
              <p>Kate Fitz Art Portfolio</p>
            </a>
            <a href="/bootcamp">
              <p>Bootcamp Capstone</p>
            </a>
            <a href="https://ecrebocpr.com/" target="blank">
              <p>Ecrebo - Client Project</p>
            </a>
            <a href="https://growthtalentsolutions.biz/" target="blank">
              <p>GTS - Client Project</p>
            </a>
          </TabModal>
        </div>
        <div className="gameDevContainer">
          <TabModal label="Game Dev">
            <p>I started my journey in web development through udemy classes.</p>
            <p>Unity Projects</p>
            <p>
              <a className="dropdown-item" href="thesisblog">
                Blog
              </a>
            </p>
            <p>
              <a className="dropdown-item" href="/currentgame">
                Current Version
              </a>
            </p>
            <p>
              <a className="dropdown-item" href="/draft">
                First Iteration
              </a>
            </p>

            <p>
              <a href="/tarot">Tarot</a>
            </p>
            <p>
              <a href="/snake">Snake</a>
            </p>
            <p>
              <a href="/unity">Shooter</a>
            </p>
          </TabModal>
        </div>
        <div className="experimentContainer">
          <TabModal label="Experiments">
            <p>I like to experiment with different materials and techniques.</p>
            <p>
              {" "}
              <a className="nav-link" href="/paintings">
                Paintings and misc <span className="sr-only"></span>
              </a>
            </p>
            <a href="ayab">
              <p>AYAB</p>
            </a>
          </TabModal>
        </div>
        <div className="contactContainer">
          <TabModal label="Contact">
            <a href="mailto: julia.s.grimes@gmail.com">
              <img
                src="https://cdn1.iconfinder.com/data/icons/business-office-and-finance/128/If_00033_enveloppe_mail-512.png"
                height="30vw"
              />
              <p>Email</p>
            </a>
            <a href="/">
              <p>Return Home</p>
            </a>
            <p>CV</p>
            <a href="https://github.com/juliasuzanne" rel="noreferrer" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" height="30vw" />
              <p>GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/julia-grimes" rel="noreferrer" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" height="30vw"></img>
              <p>LinkedIn</p>
            </a>
            {/* <p>Email</p>
            <p>CV</p>
            <a>Email</a>
            <p>CV</p> */}
          </TabModal>
        </div>
      </div>
    </div>
  );
}
