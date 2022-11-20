import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
let adjusinterval = undefined;
function App() {
  const [watch, setWatch] = useState(0);
  const [started, setStarted] = useState(false);
  const start = () => {
    adjusinterval = setInterval(() => {
      //setWatch(watch+1);
      setWatch((x) => x + 1);
    }, 1000);
    setStarted(true);
  };
  const stop = () => {
    clearInterval(adjusinterval);
    setStarted(false);
  };
  const Reset = () => {
    setWatch(0);
    clearInterval(adjusinterval);
    setStarted(false);
  };
  return (
    <>
      <div className="container">
        <h3 className="text-center">Start Stop Watch</h3>
        <h3 className="text-center">{watch}</h3>
        <div className="timer">
          <button disabled={started} onClick={start} className="start">
            Start
          </button>
          <button onClick={stop} className="stop">
            Stop
          </button>
          <button onClick={Reset} className="reset">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
