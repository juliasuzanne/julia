import { Unity, useUnityContext } from "react-unity-webgl";

export function ThesisDraft() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/DreamingOfHeartGame/Build/DreamingOfHeartGame.loader.js",
    dataUrl: "/DreamingOfHeartGame/Build/DreamingOfHeartGame.data",
    frameworkUrl: "/DreamingOfHeartGame/Build/DreamingOfHeartGame.framework.js",
    codeUrl: "/DreamingOfHeartGame/Build/DreamingOfHeartGame.wasm",
  });

  return (
    <div>
      <p className="fonted">
        {""}This is the latest draft version of my thesis game.
        {""}
      </p>
      <p className="fonted"> Please give it a moment to load!</p>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}
