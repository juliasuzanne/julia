import Snowfall from "react-snowfall";

export function Snowflakes() {
  const boot = document.createElement("img");
  boot.src =
    "https://res.cloudinary.com/dytb4ayqj/image/upload/v1711117198/Screen_Shot_2024-03-22_at_10.19.15_AM_byf9md.png";
  const glove = document.createElement("img");
  glove.src = "https://res.cloudinary.com/dytb4ayqj/image/upload/v1715293653/coin_oupwev.png";
  const umbrella = document.createElement("img");
  umbrella.src = "https://res.cloudinary.com/dytb4ayqj/image/upload/v1711600042/jglogoj_othluv.png";
  const pencil = document.createElement("img");
  pencil.src = "https://res.cloudinary.com/dytb4ayqj/image/upload/v1711601270/jglogoswim_gecmj4.png";

  const images = [boot, glove, umbrella, pencil];

  return (
    <div>
      <Snowfall
        // Changes the snowflake color
        radius={[10.0, 60.0]}
        speed={[0.01, 0.02]}
        wind={[0.01, 0.002]}
        // Applied to the canvas element
        style={{ zIndex: "2", height: "205vh", position: "fixed" }}
        images={images}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={10}
      />
    </div>
  );
}
