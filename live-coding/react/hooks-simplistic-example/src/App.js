import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <label>
        The counter is at :
        <input value={count} />
      </label>
      <br />
      <button onClick={() => setCount(count + 1)}>> +1</button>
      <button onClick={() => setCount(count - 1)}>> -1</button>
    </div>
  );
};

export default Counter;
