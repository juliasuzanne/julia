import { useEffect, useState } from "react";
import { ScrollTest } from "./ScrollTest";
import axios from "axios";

export function ScrollTestPass() {
  const [drawings, setDrawings] = useState([]);

  const handleIndexDrawings = () => {
    console.log("handleIndexDrawings");
    axios.get(`https://kate.fly.dev/drawings.json`).then((response) => {
      console.log(response.data);
      setDrawings([...drawings, response.data]);
      setDrawings(response.data);
    });
  };

  useEffect(handleIndexDrawings, []);
  return <ScrollTest drawings={drawings} />;
}
