import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);

  function handleClick() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1>Count value is: {count} </h1>
      <button onClick={handleClick}> Increment</button>
      <button onClick={decrement}> Decrement</button>

      <h1>We are incrementing the value by : {incrementBy} </h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Increase Increment</button>
    </div>
  );
}
