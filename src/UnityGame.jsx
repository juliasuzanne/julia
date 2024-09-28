import { Unity, useUnityContext } from "react-unity-webgl";
import { Header } from "./Header";
export function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Dreaming/Build/Dreaming.loader.js",
    dataUrl: "/Dreaming/Build/Dreaming.data",
    frameworkUrl: "/Dreaming/Build/Dreaming.framework.js",
    codeUrl: "/Dreaming/Build/Dreaming.wasm",
  });

  return (
    <div>
      <Header currentPage={"home"} />

      <p className="fonted">
        {""}I am taking a Udemy course trying to learn to code and use Unity. This is my customized version of
        GameDevHQ's shooter example. The art is all custom. Please enjoy!
        {""}
      </p>
      <p className="fonted"> Press "P" to pause, game may take a minute to load : ) </p>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}
