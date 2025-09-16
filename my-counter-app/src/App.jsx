import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Determine background color
  const backgroundColor = count > 5 ? 'lightgreen' : 'lightblue';

  return (
    <div style={{ backgroundColor, padding: '20px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;