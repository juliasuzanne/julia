import { Unity, useUnityContext } from "react-unity-webgl";
import "./CSS/thesisartwalk.css";

export function ThesisArtWalk() {
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "/SignsOfLifeWEBGLMac/Build/SignsOfLifeWEBGLMac.loader.js",
  //   dataUrl: "/SignsOfLifeWEBGLMac/Build/SignsOfLifeWEBGLMac.data",
  //   frameworkUrl: "/SignsOfLifeWEBGLMac/Build/SignsOfLifeWEBGLMac.framework.js",
  //   codeUrl: "/SignsOfLifeWEBGLMac/Build/SignsOfLifeWEBGLMac.wasm",
  // });

  return (
    <div>
      <p className="topStatement">
        {""}I'm proud to present the version of my thesis project, Signs Of Life -
        <strong> a Unity built 2D point and click game </strong>- I showed at MICA's 2024 Art Walk. This game is still
        in progress, but playable with an ending. Please enjoy and <strong>stay tuned </strong>for the final, published
        version on Steam!
      </p>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* <Unity unityProvider={unityProvider} /> */}
            <h3 className="title">About</h3>
            <br></br>
            <a href="/thesisblog">
              <p className="aboutPBold">
                (I kept a blog throughout the process of making this game, read it by clicking here.)
              </p>
            </a>

            <p className="aboutP">
              This game represents a time of reflection and reconnection with myself. After taking an eight year hiatus
              between dropping out and coming back to finish my Bachelor's degree, I have a different outlook on art and
              my relationship to that creative side of myself. It was very important to me to have this outlet in my
              childhood and adolescence, and I'd like to try to find a place for it in my adult life while still
              incorporating a lot of the skills and fulfillment I get from more technical work that I practice now.{" "}
            </p>
            <p className="aboutP">
              This game includes many writings, drawings, and ideas from the time in my life when I first left school -
              when games were very important to a sense of connection in a world that felt increasingly difficult to
              navigate and exist in. I hope that it facilitates a meditative, controlled environment for your thoughts
              as those games did for me, and a sense of discovery as you explore and interact with the many items and
              characters.
            </p>
          </div>
          <div className="col-lg-6">
            <h2 className="title">Play</h2>
            <br></br>

            {/* <p className="fonted">
        Game may take a few minutes to load... thank you for your patience. Tip: game will play better on a larger
        screen/full size window and is not mobile friendly.
      </p> */}
            <div className="borderNewspaper">
              <p className="aboutPBold"> Signs Of Life is now available to play as a google drive link.</p>
              <a href="#additional">
                <p className="aboutPBold"> Scroll down or click here to see additional mini games. </p>
              </a>
              <a href="https://drive.google.com/file/d/1VkluueJSzTx5twagtPzmzdv4l91RRXGC/view?usp=sharing">
                <h4 className="postheader"> Download Signs Of Life - For Mac</h4>
              </a>
              <a href="https://drive.google.com/file/d/1xkv-5Udq6FVqYMKYx-SbZXtNGFiVXUKJ/view?usp=sharing">
                <h4 className="postheader"> Download Signs Of Life - For PC</h4>
              </a>
              <br></br>
              <img
                className="showimage"
                src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1717687388/showimage_ciw9mu.png"
              ></img>
              <p>(Above) Image of game installation in Art Walk gallery at MICA May 2024.</p>
            </div>
          </div>
          {/* <br></br>
          <br></br> <br></br>
          <br></br> */}
        </div>
      </div>
      <div className="col-lg-12" id="additional">
        <h2 className="title">Additional Games</h2>
        <br></br>
        <a href="/tarot">
          <p className="aboutPBold">Tarot Card Mimic build with React and Ruby on Rails</p>
        </a>
        <a href="/snake">
          <p className="aboutPBold">Snake Mimic built with HTML/React and JS</p>
        </a>
        <a href="/unity">
          <p className="aboutPBold">Shooter Style Mini Game Built with Unity</p>
        </a>
        <a href="/draft">
          <p className="aboutPBold">Unity Experiment</p>
        </a>
      </div>
    </div>
  );
}
