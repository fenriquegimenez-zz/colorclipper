import { useState, useEffect } from "react";
import Color from "./Color";

import "./css/colorpalette.css";

const ColorPalette = ({ colors, rgb }) => {
  let currentColors = colors;
  if (rgb === true) {
    currentColors = colors.map((color) => `rgb(${color})`);
  }

  const listOfColors = currentColors.map((color, index) => (
    <Color color={color} key={index + new Date().getUTCMilliseconds()} />
  ));
  return <section className="colorpalette">{listOfColors}</section>;
};
export default ColorPalette;
