import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Dream/Build/Dream.loader.js",
    dataUrl: "/Dream/Build/Dream.data.gz",
    frameworkUrl: "/Dream/Build/Dream.framework.js.gz",
    codeUrl: "/Dream/Build/Dream.wasm.gz",
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
