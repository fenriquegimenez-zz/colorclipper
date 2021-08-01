import { useState, useEffect } from "react";

function useWindowSize() {
  //initial the hook with state for width and height
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    //handle for the window resize event
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    //add handle function to the resize event
    window.addEventListener("resize", handleResize);

    handleResize(); // invoke the first time the app run

    return window.removeEventListener("resize", handleResize); //remove the handle function
  }, []);
  return windowSize;
}

export default useWindowSize;
