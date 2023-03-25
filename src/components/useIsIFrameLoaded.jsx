// use-is-iframe-loaded.hook.ts
import { useState, useEffect } from "react";
// import Spinner from "./Spinner";

export const useIsIFrameLoaded = (iframeRef) => {
  const [isIFrameLoaded, setIsIFrameLoaded] = useState(false);
  const iframeCurrent = iframeRef.current;

  useEffect(() => {
    // setIsIFrameLoaded(false);
    // {<h2>maybe add spinner here??</h2>}
    iframeCurrent?.addEventListener("load", () => setIsIFrameLoaded(true));

    return () => {
      // setIsIFrameLoaded(true);
      iframeCurrent?.removeEventListener("load", () => setIsIFrameLoaded(true));
    };
  }, [iframeCurrent]);

  return isIFrameLoaded;
};
