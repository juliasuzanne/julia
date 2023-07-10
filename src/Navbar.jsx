import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top" id="navabar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="menu-title">MENU</span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              MENU
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/workjournal">
                  Work Journal
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Websites
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a className="nav-link" href="/family">
                      Family History Project
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/kate">
                      Kate FitzGerrell Portfolio
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="/bootcamp">
                      Bootcamp Capstone Project
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mini Games
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="dropdown-item" href="/snake">
                      Snake
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/tarot">
                      I Tell Your Future
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="/unity">
                      Space Shooter - Demo
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item" href="/unity-custom">
                      Unity Experiment
                    </a>
                  </li> */}
                </ul>
              </li>
            </ul>
            {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
