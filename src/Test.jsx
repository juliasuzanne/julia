import { FooterDefault } from "./FooterDefault";
import ReactCurvedText from "react-curved-text";

export function Test() {
  return (
    <div>
      <ReactCurvedText
        width={700}
        height={400}
        cx={130}
        cy={120}
        rx={200}
        ry={200}
        startOffset={10}
        text="curved text test test test the more circular the more circles forever and ever and ever and ever more more"
      />

      {/* <svg viewBox="0 0 500 500">
        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
        <text width="500">
          <textPath href="#curve">Dangerous Curves Ahead</textPath>
        </text>
      </svg> */}

      <svg viewBox="0 0 425 300">
        <path
          id="curve"
          d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
        />
        <text x="195">
          <textPath href="#curve">Dangerous Curves Ahead</textPath>
        </text>
      </svg>

      <FooterDefault></FooterDefault>
    </div>
  );
}
