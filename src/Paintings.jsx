export function Paintings() {
  return (
    <div>
      <div>
        <h1 className="heading" id="center-div-painting">
          {" "}
          Oil Paintings{" "}
        </h1>
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
      <br></br>
      <br></br>

      <div className="paintings_container">
        <img width="80%" src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569244/paintings_issjv6.jpg" />
      </div>
      <br></br>
      <br></br>

      <h1 className="heading" id="center-div-painting">
        {" "}
        CNC Milled Box{" "}
      </h1>
      <p className="fonted" id="center-div-painting">
        {" "}
        Custom program to mill this detailed muscular face on a brass box, 3 x 2 x 1.5 inches{" "}
      </p>
      <img width="80%" src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569253/cnc_zhxtmk.jpg" />
    </div>
  );
}
