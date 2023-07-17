import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "https://juliasuzannegrimes.com/Build/TestSpace.loader.js",
    dataUrl: "https://juliasuzannegrimes.com/Build/TestSpace.data.gz",
    frameworkUrl: "https://juliasuzannegrimes.com/Build/TestSpace.framework.js.gz",
    codeUrl: "https://juliasuzannegrimes.com/Build/TestSpace.wasm.gz",
  });

  return (
    <div>
      <p className="fonted">
        {""}I am taking a Udemy course trying to learn to code and use Unity. This is one of the sample games. When I
        have some free time, I'd love to customize the graphics and sounds. I used this as an opportunity to play
        serializing data using JSON, which took a while but I finally figured out. There are some unpolished features.
        Stay tuned for updates :).
        {""}
      </p>
      <p className="fonted"> Press "P" to pause </p>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}
