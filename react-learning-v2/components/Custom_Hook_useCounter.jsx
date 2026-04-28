import { useState } from "react";

export const Custom_Hook_useCounter = (initial_val = 0) => {
  const [count, setCount] = useState(initial_val);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initial_val);

  return { count, increment, decrement, reset };
};
