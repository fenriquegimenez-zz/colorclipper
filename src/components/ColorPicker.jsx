import { PhotoshopPicker, SketchPicker } from "react-color";
import useWindowSize from "../hooks/useWindowSize";

const ColorPicker = ({ currentColor, handleOnChange, header }) => {
  const windowSize = useWindowSize(); // get the windows width and height size

  return (
    <>
      {windowSize.width >= 700 ? (
        <PhotoshopPicker
          header={header}
          className="colorpicker"
          color={currentColor}
          onChange={(updateColor) => handleOnChange(updateColor)}
        />
      ) : (
        <SketchPicker
          className="colorpicker"
          color={currentColor}
          onChange={(updateColor) => handleOnChange(updateColor)}
        />
      )}
    </>
  );
};

export default ColorPicker;
