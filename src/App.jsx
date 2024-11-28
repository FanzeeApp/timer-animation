import { useState, useRef } from "react";
import "./App.css";
import CircularWithValueLabel from "./components/leaner";

function App() {
  const [time, setTime] = useState(90);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (isRunning || time <= 0) return;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(100);
  };

  return (
    <div className="App">
      <h1>Orqaga Taymer</h1>
      <div className="timer">
        <CircularWithValueLabel /> {}
      </div>
      <div className="buttons"></div>
    </div>
  );
}

export default App;
