import { useState } from "react";
import Timer from "./components/Timer";
import ColorChanger from "./components/ColorChanger";

function App() {
  const [time, setTime] = useState(300);
  const [running, setRunning] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
    document.body.style.backgroundColor = color;
  };

  const handleStartStop = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  return (
    <div>
      <h1>Tempulse</h1>
      <Timer
        onTimeChange={handleTimeChange}
        onStartStop={handleStartStop}
        onColorChange={handleColorChange}
      />
      <ColorChanger time={time} onColorChange={handleColorChange} />
    </div>
  );
}

export default App;
