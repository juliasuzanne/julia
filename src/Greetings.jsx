import axios from "axios";
import { useEffect, useState } from "react";

export function Greetings() {
  const [greeting1, setGreeting1] = useState([]);

  const handleIndexGreetings = () => {
    console.log("handleIndexGreetings");
    axios.get(`https://www.greetingsapi.com/random`).then((response) => {
      console.log(response.data);
      setGreeting1(response.data);
    });
  };

  useEffect(handleIndexGreetings, []);

  return (
    <div className="noheight">
      <svg className="filledsvg" viewBox="20 0 805 105">
        <path
          id="curve"
          d="M35.5,29.5c0,0-5,7.45,0,12.72c0,0-2,1.07-4,3.26c-1.68,1.84-3.16,4.57-4,10.01c-0.99,6.4-1.91,12.44,1,18
            c3.28,6.26,7.54,4.49,17,13c7.66,6.89,6.67,9.67,12,12c7.64,3.34,16.03,0.39,20-1c7.48-2.62,7.89-5.26,14-8
            c9.76-4.37,13.29,0.31,29-1c5.26-0.44,27.28-2.28,32-13c0.78-1.78,1.8-5.43,5-10c2.51-3.59,3.57-3.76,5-6c3.23-5.08,3.97-13.9,0-19
            c-3.63-4.66-8.11-2.24-19-9c-3.67-2.28-3.32-2.65-6-4c-5.91-2.97-11.42-3.09-18-3c-14.85,0.2-15.16,1.19-23,1
            c-15.52-0.37-15.84-4.26-22-2c-9.57,3.51-10.45,13.51-21,16c-3.72,0.88-7,0.43-9,0c-1.2-0.41-3.14-1.25-5-3
            C36.71,33.88,35.81,30.81,35.5,29.5z"
        />
        <a href="/">
          <text x="50" y="70" font-size="200%" className="helloBubble">
            Hello...
          </text>
        </a>
      </svg>
    </div>
  );
}
