// Custom hooks in react are the functions
// that let us reuse logic across multiple components.
// Starts with : "use"

import { Custom_Hook_useCounter } from "./Custom_Hook_useCounter";

// It is different from normal js functions,
// Like custom hooks : Can use react hooks within it

export const Custom_Hooks = () => {
  // We destructured the values from the custom hook function that we have created (as it was returning these values)
  const { count, increment, decrement, reset } = Custom_Hook_useCounter(); // By default the initial value we have set to 0

  // const { count, increment, decrement, reset } = Custom_Hook_useCounter(5);

  // The above thing is the custom hook that we have created

  // We can use custom hooks in multiple places

  return (
    <div>
      <h2>Count is : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
