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
        {""}This is the first version of/attempt at a game I was made as part of MICA's Interactive Arts Thesis class.
      </p>
      <p className="fonted">Game may take a few minutes to load...</p>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}
