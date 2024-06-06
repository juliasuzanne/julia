import "./CSS/navbar.css";

export function Navbar() {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg  navbar-light static-top">
      &nbsp;
      <a href="/">
        <img
          className="navbaricon"
          src="      https://res.cloudinary.com/dytb4ayqj/image/upload/v1711601270/jglogoswim_gecmj4.png
          "
          height="30vw"
        ></img>
      </a>
      {/* <a href="/">
        <img
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1711593268/JGLOGO2_gzxows.png"
          height="100vw"
        ></img>
      </a> */}
      {/* <a href="/">
        <img
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1711600039/jglogol_j7z75k.png"
          height="100vw"
        ></img>
      </a> */}
      {/* <a href="/">
        <img
          src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1711600042/jglogoj_othluv.png"
          height="110vw"
        ></img>
      </a> */}
      {/* <a href="/">
        <img
          src="      https://res.cloudinary.com/dytb4ayqj/image/upload/v1711598828/jglogotop_dcsm5r.png
          "
          height="100vw"
        ></img>
      </a> */}
      &nbsp; &nbsp;
      <a href="https://www.linkedin.com/in/julia-grimes" rel="noreferrer" target="_blank">
        <img className="navbaricon" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" height="30vw"></img>
      </a>
      &nbsp; &nbsp; &nbsp;
      <a href="https://github.com/juliasuzanne" rel="noreferrer" target="_blank">
        <img className="navbaricon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" height="30vw" />
      </a>
      &nbsp; &nbsp;
      <a href="https://pin.it/1nO9KwdHp" rel="noreferrer" target="_blank">
        <img className="navbaricon" src="https://cdn-icons-png.flaticon.com/512/1051/1051329.png" height="30vw" />
      </a>
      &nbsp; &nbsp;
      <a href="mailto: julia.s.grimes@gmail.com">
        <img
          className="navbaricon"
          src="https://cdn1.iconfinder.com/data/icons/business-office-and-finance/128/If_00033_enveloppe_mail-512.png"
          height="30vw"
        />
      </a>
      &nbsp;
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        &nbsp; &nbsp;
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a id="whitetext" className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>

          <li className="nav-item active">
            <a id="whitetext" id="whitetext" className="nav-link" href="/paintings">
              Art <span className="sr-only"></span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="whitetext"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Web Development
            </a>
            <div className="dropdown-menu" aria-labelledby="whitetext">
              <a className="dropdown-item" href="/kate">
                Kate Fitz Art
              </a>
              <a className="dropdown-item" href="/bootcamp">
                Bootcamp Capstone Project
              </a>
              <a className="dropdown-item" href="https://ecrebocpr.com/" target="blank">
                Ecrebo - Client Project
              </a>
              <a className="dropdown-item" href="https://growthtalentsolutions.biz/" target="blank">
                GTS - Client Project
              </a>
              <a className="dropdown-item" href="/family">
                Family History Project
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="whitetext"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Mini-Games
            </a>
            <div className="dropdown-menu" aria-labelledby="whitetext">
              <a className="dropdown-item" href="/tarot">
                Tarot
              </a>
              <a className="dropdown-item" href="/snake">
                Snake
              </a>
              <a className="dropdown-item" href="/unity">
                Shooter
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="whitetext"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Game Dev
            </a>
            <div className="dropdown-menu" aria-labelledby="whitetext">
              <a className="dropdown-item" href="thesisblog">
                Weekly Progress
              </a>
              <a className="dropdown-item" href="/riyl">
                Media Consumed While Creating
              </a>
              <a className="dropdown-item" href="/currentgame">
                Current Version
              </a>
              <a className="dropdown-item" href="/draft">
                First Iteration
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
