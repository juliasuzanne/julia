import { Unity, useUnityContext } from "react-unity-webgl";

export function ThesisArtWalk() {
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: "/SignsOfLife/Build/SignsOfLife.loader.js",
  //   dataUrl: "/SignsOfLife/Build/SignsOfLife.data",
  //   frameworkUrl: "/SignsOfLife/Build/SignsOfLife.framework.js",
  //   codeUrl: "/SignsOfLife/Build/SignsOfLife.wasm",
  // });

  return (
    <div>
      <h2 className="title">Signs Of Life</h2>
      <p className="fonted">
        {""}I'm proud to present the version of my thesis project - a Unity built 2D point and click game - I showed at
        MICA's 2024 Art Walk. This game is still in progress, but playable with an ending. Please enjoy and stay tuned
        for the final, published version on Steam!
      </p>
      {/* <p className="fonted">
        Game may take a few minutes to load... thank you for your patience. Tip: game will play better on a larger
        screen/full size window and is not mobile friendly.
      </p> */}
      <p className="fonted">
        {" "}
        Due to the large file size (2.3GB), I cannot host the game online but it is available as a google drive link.
        File size will be reduced with further updates and a demo will be available online soon.
      </p>
      <a href="https://drive.google.com/file/d/1jtYWch11Sdd9dIzrG5xY6qhcAc2FRBQG/view?usp=sharing">
        <h4 className="postheader"> Download Here - For Mac</h4>
      </a>
      <br></br>
      <br></br> <br></br>
      <br></br>
      {/* <Unity unityProvider={unityProvider} /> */}
      <h3 className="title">About</h3>
      <p>
        This game represents a time of reflection and reconnection with myself. After taking an eight year hiatus
        between dropping out and coming back to finish my Bachelor's degree, I have a different outlook on art and my
        relationship to that creative side of myself. It was very important to me to have this outlet in my childhood
        and adolescence, and I'd like to try to find a place for it in my adult life while still incorporating a lot of
        the skills and fulfillment I get from more technical work that I practice now.{" "}
      </p>
      <p>
        This game includes many writings, drawings, and ideas from this time in my life. I hope that it evokes a sense
        of peace amongst a confusing world for you, and a sense of discovery as you explore and interact with the many
        items and characters.
      </p>
      <img
        className="showimage"
        src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1715303772/Screen_Shot_2024-05-09_at_9.16.05_PM_xicp9a.png"
      ></img>
      <p>(Above) Image of game installation in Art Walk gallery at MICA May 2024.</p>
    </div>
  );
}
