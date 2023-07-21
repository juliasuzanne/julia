import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Dreaming/Build/Dreaming.loader.js",
    dataUrl: "/Dreaming/Build/Dreaming.data",
    frameworkUrl: "/Dreaming/Build/Dreaming.framework.js",
    codeUrl: "/Dreaming/Build/Dreaming.wasm",
  });

  return (
    <div>
      <p className="fonted">
        {""}I am taking a Udemy course trying to learn to code and use Unity. This is one of the sample games. The art
        is all custom. Please enjoy!
        {""}
      </p>
      <p className="fonted"> Press "P" to pause </p>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}
