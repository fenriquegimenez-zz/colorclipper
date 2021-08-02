import { useState, useEffect } from "react";
import tinycolor2 from "tinycolor2";

const Color = ({ color, index }) => {
  const [alert, setAlert] = useState(false);
  const [brightness, setBrightness] = useState(() => {
    const currentColor = tinycolor2(color);
    return currentColor.getBrightness();
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [alert]);

  let styles = {};
  if (brightness >= 90) {
    styles = {
      color: "black",
    };
  } else {
    styles = {
      color: "white",
    };
  }

  return (
    <div
      className="color"
      style={{ backgroundColor: `${color}` }}
      onClick={() => {
        navigator.clipboard.writeText(color);
        setAlert(true);
      }}
    >
      <div className="colorname" style={styles} key={1}>
        {color}
      </div>
      <p className={alert ? "visible" : "invisible"} style={styles} key={2}>
        Copied to clipboard
      </p>
    </div>
  );
};

export default Color;
