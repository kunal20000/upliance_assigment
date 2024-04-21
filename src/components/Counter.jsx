import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import '../App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Animation for background color
  const { backgroundColor } = useSpring({
    backgroundColor: `rgb(${count * 10}, ${count * 5}, ${count * 2})`,
  });

  // increment
  const increment = () => {
    setCount(count + 1);
  };

  // decrement
  const decrement = () => {
    safeDecrement();
  };

  const safeDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // reset
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <animated.div
        style={{ width: "90%", height: "100px", margin:"10px", borderRadius:"5px", backgroundColor }}
      />
      <div className="btn-container">
        <h2>Counter: {count} </h2><br />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
