import { useState, useEffect } from "react";

function Timer({ onTimeChange, onStartStop, onColorChange }) {
  const [time, setTime] = useState(300);
  const [running, setRunning] = useState(false);

  const handleChangeTime = (amount) => {
    if (!running) {
      onTimeChange((prevTime) => Math.max(0, prevTime + amount));
    }
  };

  const handleStartStop = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const handleTimeChange = (event) => {
    if (!running) {
      const newTime = parseInt(event.target.value, 10);
      onTimeChange(isNaN(newTime) ? 0 : Math.max(0, newTime * 60));
    }
  };

  const handleSecondsChange = (amount) => {
    if (!running) {
      onTimeChange((prevTime) => Math.max(0, prevTime + amount));
    }
  };
  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            setRunning(false);
            clearInterval(intervalId);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running, time]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          fontSize: "48px",
          borderRadius: "50%",
          border: "2px solid #000",
          display: "inline-block",
          padding: "20px",
        }}
      >
        <input
          type="number"
          value={Math.floor(time / 60)}
          onChange={handleTimeChange}
          style={{ width: "40px", textAlign: "center" }}
        />
        :
        <input
          type="number"
          value={(time % 60).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
          onChange={(e) => handleChangeTime(parseInt(e.target.value, 10))}
          style={{ width: "40px", textAlign: "center" }}
        />
      </div>
      <div>
        <div>{formatTime(time)}</div>
        <button onClick={() => handleChangeTime(60)}>+1 min</button>
        <button onClick={() => handleChangeTime(-60)}>-1 min</button>
        <button onClick={() => handleSecondsChange(1)}>+1 sec</button>
        <button onClick={() => handleSecondsChange(-1)}>-1 sec</button>
        <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
      </div>
    </div>
  );
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  })}`;
}

export default Timer;
