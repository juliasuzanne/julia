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
    <div>
      <p>{greeting1.greeting}, Hello! </p>
    </div>
  );
}
