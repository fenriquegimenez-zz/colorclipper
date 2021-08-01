import { useState } from "react";

import "./css/colorpalette.css";

const ColorPalette = () => {
  const [palette, setPalette] = useState([
    { hux: "#FF4848", active: false },
    { hux: "#00C1D4", active: false },
    { hux: "#FFF338", active: false },
    { hux: "#FF4C29", active: false },
  ]);

  const listOfColors = palette.map((color, index) => (
    <div
      className="color"
      style={{ backgroundColor: `${color.hux}` }}
      key={index}
    >
      {color.hux}
    </div>
  ));
  return <section className="colorpalette">{listOfColors}</section>;
};
export default ColorPalette;
