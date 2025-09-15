import { useState } from 'react';
import './App.css';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

function App() {
  return (
    <>
      <Count />
    </>
  );
}

export default App;
