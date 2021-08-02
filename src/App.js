import { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import ColorPalette from "./components/ColorPalette";
import TheoryColor from "./components/TheoryColor";
import Logo from "./logo.svg";

import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState("#334756");

  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <img src={Logo} alt="Color Clipper" className="logo-image" />
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
        <TheoryColor />
        <ColorPalette className="colorpalette" />
      </main>
    </div>
  );
}

export default App;
