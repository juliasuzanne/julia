import { FooterDefault } from "./FooterDefault";

export function Home() {
  return (
    <div>
      <div className="eggplant"></div>
      <h1 className="title-text">WELCOME</h1>
      <br></br>
      {/* <p className="fonted-links">
        <a href="/websites"> websites &nbsp; </a>~ &nbsp;
        <a href="/family"> games &nbsp; </a>~ &nbsp;
        <a href="/family"> art &nbsp;</a>~ &nbsp;
        <a href="/family"> about </a>
  </p> */}
      <div className="img__wrap">
        <a href="/ayab">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689568546/jacket_qu5w8p.png"
          />
          <div className="img__description_layer">
            <p className="img__description">fabric and sewing</p>
          </div>
        </a>
      </div>

      <div className="img__wrap">
        <a href="/websites">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569179/kate_nbw43i.png"
          />
          <div className="img__description_layer">
            <p className="img__description">web development</p>
          </div>
        </a>
      </div>
      <div className="img__wrap">
        <a href="/minigames">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569196/tarots_zv5vym.png"
          />
          <div className="img__description_layer">
            <p className="img__description">mini-games</p>
          </div>
        </a>
      </div>
      <div className="img__wrap">
        <a href="/paintings">
          <img
            className="main-page-buttons"
            src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1689569220/parrot_ocnfql.png"
          />
          <div className="img__description_layer">
            <p className="img__description">art</p>
          </div>
        </a>
      </div>

      {/* <img id="home-img" src="/src/assets/images/home.jpg"></img> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FooterDefault />
    </div>
  );
}
