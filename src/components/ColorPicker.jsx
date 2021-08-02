import { PhotoshopPicker, SketchPicker } from "react-color";
import useWindowSize from "../hooks/useWindowSize";

const ColorPicker = ({ currentColor, handleOnChange }) => {
  const windowSize = useWindowSize(); // get the windows width and height size

  const handleAccept = () => {};

  return (
    <>
      {windowSize.width >= 700 ? (
        <PhotoshopPicker
          header="Color Clipper"
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
