import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/src/assets/TestSpace/Build/TestSpace.loader.js",
    dataUrl: "/src/assets/TestSpace/Build/TestSpace.data.gz",
    frameworkUrl: "/src/assets/TestSpace/Build/TestSpace.framework.js.gz",
    codeUrl: "/src/assets/TestSpace/Build/TestSpace.wasm.gz",
  });

  return <Unity unityProvider={unityProvider} />;
}
