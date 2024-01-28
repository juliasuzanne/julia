export function Header() {
  return (
    <header>
      <div className="header">
        {/* <p className="sig-head"> the website of ... </p> */}

        <svg className="svgtest" viewBox="0 30 205 75">
          <path
            id="curve"
            d="M4.86,70c1.79,2.66,5.09,6.81,10.48,10.08,7.81,4.75,15.42,4.9,18.52,4.92,17.99,.12,21.14-12.56,40-17,17.09-4.02,20.05,5.01,40,1,17.88-3.59,17.24-11.13,30-12,22.74-1.55,29.34,22.09,51,20,14.66-1.41,16.76-12.73,33-12,10.01,.45,12.59,4.91,25,5,6.37,.05,16.29,.12,23-6,9.82-8.95,10.3-28.85,2-39-8.93-10.93-23.74-5.28-60-5-62.76,.49-74.89-15.98-110-4-10.62,3.62-18.62,7.26-34,10-16.21,2.88-30.33,2.84-41,2-.75-.13-16.19-2.5-26,9C-.76,45.93-1.66,59.33,4.86,70Z"
          />
          <a href="/">
            <text x="30">
              <textPath className="JuliaG" href="#curve">
                JULIA GRIMES
              </textPath>
            </text>
          </a>
        </svg>

        {/* <p className="JuliaG"> JULIA GRIMES </p> */}
        {/* <p className="sig-head"> thanks you for visiting </p> */}
      </div>
      <div className="padding"></div>
    </header>
  );
}
