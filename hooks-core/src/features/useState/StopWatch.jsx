import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [laps, setLaps] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      console.log("intervalRef", intervalRef.current);
      clearInterval(intervalRef.current);
      // clearInterval(intervalRef.current).destroy();
    };
  }, []);
  const handleClear = () => {
    setLaps(0);
    console.log("Before clear:", intervalRef.current);
    clearInterval(intervalRef.current);
    console.log("After clear", intervalRef.current);
    setRunning(false);
  };

  const handleRunning = () => {
    if (running) {
      console.log("intervalRef", intervalRef.current);
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - laps;
      intervalRef.current = setInterval(() => {
        setLaps(Date.now() - startTime);
      }, 10);
    }
    setRunning(!running);
  };
  return (
    <div className="stopWatch">
      <h1>{laps}ms</h1>
      <button onClick={handleRunning} className="btn btn-secondary">
        {running ? "Stop" : "Start"}
      </button>
      <button onClick={handleClear} className="btn btn-danger">
        Clear
      </button>
    </div>
  );
}

export default StopWatch;
