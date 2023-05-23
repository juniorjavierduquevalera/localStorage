import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(() => {
    const storedCounter = localStorage.getItem("counter");
    return storedCounter ? parseInt(storedCounter) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", counter.toString());
  }, [counter]);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
