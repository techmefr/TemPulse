import { useEffect } from "react";

function ColorChanger({ time, onColorChange }) {
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const percentage = (time / 300) * 100;
      const hue = (percentage / 100) * 360;
      onColorChange(`hsl(${hue}, 100%, 80%)`);
    }, 10000);

    return () => {
      clearInterval(colorInterval);
    };
  }, [time, onColorChange]);

  return null;
}

export default ColorChanger;
