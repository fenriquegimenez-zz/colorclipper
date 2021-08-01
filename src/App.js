import { useState } from "react";
import { PhotoshopPicker, SketchPicker } from "react-color";
import { isDesktop } from "react-device-detect";

import "./App.css";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const [currentColor, setCurrentColor] = useState("#334756");
  const [colors, setColors] = useState({
    firs: "#FF4848",
    second: "#00C1D4",
    third: "#FFF338",
    quarter: "#FF4C29",
  });

  const windowSize = useWindowSize(); // get the windows width and height size

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo" style={{ color: currentColor }}>
          Color Clipper
        </h1>
      </nav>
      <header className="header" style={{ backgroundColor: currentColor }}>
        {windowSize.width >= 700 ? (
          <PhotoshopPicker
            className="colorpicker"
            color={currentColor}
            onChange={(updateColor) => setCurrentColor(updateColor.hex)}
          />
        ) : (
          <SketchPicker
            className="colorpicker"
            color={currentColor}
            onChange={(updateColor) => setCurrentColor(updateColor.hex)}
          />
        )}
      </header>
      <main className="main"></main>
    </div>
  );
}

export default App;
