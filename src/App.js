import { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import ColorPalette from "./components/ColorPalette";
import TheoryColor from "./components/TheoryColor";
import colorGenerator from "./utitly/ColorGenerator";
import Values from "values.js";
import Logo from "./logo.svg";

import "./App.css";

function App() {
  const [currentColor, setCurrentColor] = useState("#4358E4");
  const [colors, setColors] = useState(colorGenerator("triad", "#4358E4"));
  const [theory, setTheory] = useState("triad");
  const [fullColors, setFullColors] = useState(
    new Values("#4358E4").all(5).map((color) => color.rgb.join(","))
  );
  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
    setColors(colorGenerator(theory, currentColor));
    setFullColors(
      new Values(currentColor).all(5).map((color) => color.rgb.join(","))
    );
  };

  const handleTheoryOptions = (option) => {
    setTheory(option);
    setColors(colorGenerator(option, currentColor));
  };

  return (
    <div className="App">
      <nav className="navbar">
        <img src={Logo} alt="Color Clipper" className="logo-image" />
        <h1 className="logo" style={{ color: currentColor }}>
          Color Clipper
        </h1>
      </nav>
      <header
        className="header"
        style={{
          backgroundColor: currentColor,
          backgroundImage: `linear-gradient(160deg, ${colors[1]} 0%,  ${colors[2]} 100%)`,
        }}
      >
        <ColorPicker
          header={theory}
          currentColor={currentColor}
          handleOnChange={handleOnChange}
        />
      </header>
      <main className="main">
        <TheoryColor handleTheoryOptions={handleTheoryOptions} />
        <h2 className="title2">
          {theory === "split"
            ? "SPLITS COMPLEMENTS"
            : theory === "ana"
            ? "ANALOGOUS"
            : theory === "mono"
            ? "MONOCHROMATIC"
            : theory === "triad"
            ? "TRIAD"
            : "TETRAD"}
        </h2>
        <ColorPalette className="colorpalette" colors={colors} rgb={false} />
        <section className="seconpalette">
          <h2 className="title2"> Primary lightness and darkness versions </h2>
          <ColorPalette
            className="colorpalette"
            colors={fullColors}
            rgb={true}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
