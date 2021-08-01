import { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import ColorPalette from "./components/ColorPalette";

import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState("#334756");
  const [colors, setColors] = useState({
    firs: "#FF4848",
    second: "#00C1D4",
    third: "#FFF338",
    quarter: "#FF4C29",
  });

  const handleOnChange = (color) => {
    setCurrentColor(color);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="logo" style={{ color: currentColor }}>
          Color Clipper
        </h1>
      </nav>
      <header className="header" style={{ backgroundColor: currentColor }}>
        <ColorPicker
          currentColor={currentColor}
          handleOnChange={handleOnChange}
        />
      </header>
      <main className="main">
        <ColorPalette className="colorpalette" />
      </main>
    </div>
  );
}

export default App;
