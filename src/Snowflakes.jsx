import Snowfall from "react-snowfall";

export function Snowflakes() {
  const boot = document.createElement("img");
  boot.src = "https://res.cloudinary.com/dytb4ayqj/image/upload/v1706772046/boot_d6vmxh.png";
  const glove = document.createElement("img");
  glove.src = "https://res.cloudinary.com/dytb4ayqj/image/upload/v1706772048/glovepng_fgm7yc.png";
  const umbrella = document.createElement("img");
  umbrella.src = "https://res.cloudinary.com/dytb4ayqj/image/upload/v1706772053/umbrella_tgqajb.png";
  const pencil = document.createElement("img");
  pencil.src = "https://res.cloudinary.com/dytb4ayqj/image/upload/v1706772050/pencil_hlowbu.png";
  const images = [boot, glove, umbrella, pencil];

  return (
    <div>
      <Snowfall
        // Changes the snowflake color
        radius={[50.0, 80.0]}
        speed={[0.001, 0.015]}
        wind={[0.0, 0.01]}
        // Applied to the canvas element
        style={{ zIndex: "2", height: "105vh", position: "fixed" }}
        images={images}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={4}
      />
    </div>
  );
}
