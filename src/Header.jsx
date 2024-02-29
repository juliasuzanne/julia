import { Snowflakes } from "./Snowflakes";

export function Header() {
  return (
    <header>
      <Snowflakes></Snowflakes>
      <div className="header">
        {/* <p className="sig-head"> the website of ... </p> */}

        <a href="/">
          <textPath className="JuliaG" href="#curve">
            Julia Grimes
          </textPath>
        </a>
        <div className="padding"></div>
        {/* <p className="JuliaG"> JULIA GRIMES </p> */}
        {/* <p className="sig-head"> thanks you for visiting </p> */}
      </div>
      <br></br>
    </header>
  );
}
