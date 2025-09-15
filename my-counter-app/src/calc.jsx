import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => setCount(prev => prev + 1);
  const subtract = () => setCount(prev => prev - 1);
  const multiply = () => setCount(prev => prev * 2);
  const divide = () => setCount(prev => {
    // avoid dividing by zero or decimal rounding issues
    if (prev === 0) return 0;
    return prev / 4;
  });

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>×</button>
      <button onClick={divide}>÷</button>
    </div>
  );
}

export default Counter;