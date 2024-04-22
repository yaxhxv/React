import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 10) {
      count = count + 1;
      setCount(count);
    }
  };
  const decValue = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  };
  return (
    <>
      <h1>React Counter App</h1>
      <h3>the Count is: {count}</h3>
      <button onClick={addValue}>+1</button>
      <button onClick={decValue}>-1</button>
    </>
  );
}

export default App;
