import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Dream2/Build/Dream2.loader.js",
    dataUrl: "/Dream2/Build/Dream2.data.gz",
    frameworkUrl: "/Dream2/Build/Dream2.framework.js.gz",
    codeUrl: "/Dream2/Build/Dream2.wasm.gz",
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
