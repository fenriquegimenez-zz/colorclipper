import { useState } from "react";
import { PhotoshopPicker, SketchPicker } from "react-color";
import { isDesktop } from "react-device-detect";

import "./App.css";

function App() {
  const [color, setColor] = useState("#334756");

  return (
    <div className="App">
      <header className="header">
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
