export function Paintings() {
  return (
    <div>
      <div>
        <h2 className="heading" id="center-div-painting">
          {" "}
          Oil Paintings{" "}
        </h2>
        <br></br>
        <p className="fonted" id="center-div-painting">
          {" "}
          Some oil paintings I've done since 2020. Mostly from photos taken by my sister Lauren.{" "}
        </p>
        <p className="fonted" id="center-div-painting">
          {" "}
          Commissioned work available upon request.{" "}
        </p>
      </div>
      <div className="paintings_container">
        <img width="80%" src="/src/assets/images/paintings.jpg" />
      </div>
      <img width="80%" src="/src/assets/images/cnc.jpg" />
    </div>
  );
}
