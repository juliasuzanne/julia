import { FooterDefault } from "./FooterDefault";
import ReactCurvedText from "react-curved-text";

export function ContactCircle() {
  return (
    <div id="footercircle">
      <div id="circle" className="contactcircle">
        <a href="/">
          <svg version="1.1" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 200 350">
            <defs>
              <path id="circlePath" d=" M 200, 200 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
            </defs>
            <g>
              <use href="#circlePath" fill="none" />
              <rect x="160" y="160" width="80" height="80" fill="transparent" />
              <text fill="red">
                <textPath href="#circlePath">PAGE*UNDER*CONSTRUCTION*</textPath>
              </text>
            </g>
          </svg>
        </a>
      </div>

      {/* <svg viewBox="0 0 425 300">
        <path
          id="curve"
          d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
        />
        <text x="195">
          <textPath href="#curve">Dangerous Curves Ahead</textPath>
        </text>
      </svg> */}
    </div>
  );
}
