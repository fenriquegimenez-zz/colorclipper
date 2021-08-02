import tinycolor2 from "tinycolor2";

function colorGenerator(opt, color) {
  let colors = null;

  const options = {
    triad: {
      getColors: function () {
        const colorsHSL = tinycolor2(color).triad();

        const colorHEX = colorsHSL.map((t) => {
          return t.toHexString();
        }); // [ "#ff0000", "#00ff00", "#0000ff" ]
        return colorHEX;
      },
    },
    tetrad: {
      getColors: function () {
        const colorHSL = tinycolor2(color).tetrad();

        const colorHEX = colorHSL.map(function (t) {
          return t.toHexString();
        }); // [ "#ff0000", "#80ff00", "#00ffff", "#7f00ff" ]
        return colorHEX;
      },
    },
    mono: {
      getColors: function () {
        const colorHSL = tinycolor2(color).monochromatic();

        const colorHEX = colorHSL.map(function (t) {
          return t.toHexString();
        }); // [ "#ff0000", "#2a0000", "#550000", "#800000", "#aa0000", "#d40000" ]
        return colorHEX;
      },
    },
    ana: {
      getColors: function () {
        const colorHSL = tinycolor2(color).analogous();

        const colorHEX = colorHSL.map(function (t) {
          return t.toHexString();
        }); // [ "#ff0000", "#ff0066", "#ff0033", "#ff0000", "#ff3300", "#ff6600" ]
        return colorHEX;
      },
    },
    split: {
      getColors: function () {
        const colorHSL = tinycolor2(color).splitcomplement();

        const colorHEX = colorHSL.map(function (t) {
          return t.toHexString();
        }); // [ "#ff0000", "#ccff00", "#0066ff" ]
        return colorHEX;
      },
    },
  };

  colors = options[opt].getColors();

  return colors;
}

export default colorGenerator;
