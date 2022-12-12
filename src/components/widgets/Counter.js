import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="count-card">
      <div className="count-container">
        <h1>{count}</h1>
        <div className="buttons">
          <button onClick={increment}>+</button>
          <button onClick={count > 0 ? decrement : null}>-</button>
        </div>
      </div>
    </div>
  );
}
