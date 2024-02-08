import "./CSS/navbar.css";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-warning navbar-light fixed-top">
      &nbsp;
      <a href="/">
        <img src="https://static.thenounproject.com/png/3697721-200.png" height="50vw"></img>
      </a>
      &nbsp; &nbsp;
      <a href="https://www.linkedin.com/in/julia-grimes" rel="noreferrer" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" height="30vw"></img>
      </a>
      &nbsp; &nbsp; &nbsp;
      <a href="https://github.com/juliasuzanne" rel="noreferrer" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" height="30vw" />
      </a>
      &nbsp; &nbsp;
      <a href="https://pin.it/1nO9KwdHp" rel="noreferrer" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051329.png" height="30vw" />
      </a>
      &nbsp; &nbsp;
      <a href="mailto: julia.s.grimes@gmail.com">
        <img
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
            <a className="nav-link" href="/">
              Home <span className="sr-only"></span>
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="/paintings">
              Art <span className="sr-only"></span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Web Development
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/kate">
                Kate Fitz Art
              </a>
              <a className="dropdown-item" href="/bootcamp">
                Bootcamp Capstone Project
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
              id="navbarDropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Mini-Games
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
              id="navbarDropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              IA Thesis Project
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="thesisblog">
                Weekly Progress
              </a>
              <a className="dropdown-item" href="/riyl">
                Media Consumed While Creating
              </a>
              <a className="dropdown-item" href="/draft">
                Current Draft
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
