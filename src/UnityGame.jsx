import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/TestSpace/Build/TestSpace.loader.js",
    dataUrl: "/TestSpace/Build/TestSpace.data.gz",
    frameworkUrl: "/TestSpace/Build/TestSpace.framework.js.gz",
    codeUrl: "/TestSpace/Build/TestSpace.wasm.gz",
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
