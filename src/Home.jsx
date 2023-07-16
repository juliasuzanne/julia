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
      <img className="main-page-buttons" src="/src/assets/images/parrot.png" />
      <img className="main-page-buttons" src="/src/assets/images/jacket.png" />
      <img className="main-page-buttons" src="/src/assets/website/kate.png" />
      <img className="main-page-buttons" src="/src/assets/tarots.png" />

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
