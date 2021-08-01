import { PhotoshopPicker, SketchPicker } from "react-color";
import useWindowSize from "../hooks/useWindowSize";

const ColorPicker = (props) => {
  const windowSize = useWindowSize(); // get the windows width and height size

  return (
    <>
      {windowSize.width >= 700 ? (
        <PhotoshopPicker
          className="colorpicker"
          color={props.currentColor}
          onChange={(updateColor) => props.handleOnChange(updateColor)}
        />
      ) : (
        <SketchPicker
          className="colorpicker"
          color={props.currentColor}
          onChange={(updateColor) => props.handleOnChange(updateColor)}
        />
      )}
    </>
  );
};

export default ColorPicker;
