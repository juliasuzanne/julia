import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Dream3/Build/Dream3.loader.js",
    dataUrl: "/Dream3/Build/Dream3.data.gz",
    frameworkUrl: "/Dream3/Build/Dream3.framework.js.gz",
    codeUrl: "/Dream3/Build/Dream3.wasm.gz",
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
