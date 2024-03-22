import Snowfall from "react-snowfall";

export function Snowflakes() {
  const boot = document.createElement("img");
  boot.src = "https://sislersstone.com/wp-content/uploads/2023/02/Cinder-Brick.png";
  const glove = document.createElement("img");
  glove.src =
    "https://www.sealedair.com/content/dam/see-dot-com-web-only/pdp-heros/product-range-itl-images/high-performance-inflatable-cushioning/Sealed_Air_20161208_238.png.transform/medium/image.png";
  const umbrella = document.createElement("img");
  umbrella.src =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/963a0f84-83bf-4d19-a442-3648efd7574a/dacmqt2-f2da178a-495c-49f9-9316-36bb5e1b4284.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2M2EwZjg0LTgzYmYtNGQxOS1hNDQyLTM2NDhlZmQ3NTc0YVwvZGFjbXF0Mi1mMmRhMTc4YS00OTVjLTQ5ZjktOTMxNi0zNmJiNWUxYjQyODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gIAJH5JdxbjaQ4aPAZ9CVWgSX8_4Pv7E6u2Z4UQSv8A";
  const pencil = document.createElement("img");
  pencil.src = "https://jackkneukergraphicdesign.files.wordpress.com/2020/03/impossibleshape1.png?w=1024";

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
        snowflakeCount={5}
      />
    </div>
  );
}
