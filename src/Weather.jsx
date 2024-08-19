import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const navigate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude.toFixed(7));
        setLong(position.coords.longitude.toFixed(7));
      });
    } else {
      // display an error if not supported
      console.error("Geolocation is not supported by this browser.");
      setPos("error");
    }
  };

  function handleGetWeather() {
    axios
      .get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
      .then((response) => {
        console.log(response.data.results.sunrise);
        setSunset(response.data.results.sunset);
        setSunrise(response.data.results.sunrise);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => navigate(), []);
  useEffect(() => {
    if (lat !== 0 && long !== 0) {
      handleGetWeather();
    } else {
      console.log("waiting for data to populate...");
    }
  }, [lat, long]);

  return (
    <div>
      <button onClick={navigate}>Navigate</button>
      <p>
        Position: {lat}, {long}
      </p>
      <h1>{sunrise === "" ? "Loading... " : `Sunrise: ${sunrise}`}</h1>
      <h1>{sunset === "" ? "Loading... " : `Sunset: ${sunset}`}</h1>
    </div>
  );
}
