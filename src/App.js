import { useState } from "react";
import { PhotoshopPicker, SketchPicker } from "react-color";
import { isDesktop } from "react-device-detect";

import "./App.css";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const [color, setColor] = useState("#334756");
  const windowSize = useWindowSize();

  console.log(windowSize);

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo">Color Clipper</h1>
      </nav>
      <header className="header" style={{ backgroundColor: color }}>
        {isDesktop ? (
          <PhotoshopPicker
            className="colorpicker"
            color={color}
            onChange={(updateColor) => setColor(updateColor.hex)}
          />
        ) : (
          <SketchPicker
            className="colorpicker"
            color={color}
            onChange={(updateColor) => setColor(updateColor.hex)}
          />
        )}
      </header>
      <main className="main"></main>
    </div>
  );
}

export default App;
