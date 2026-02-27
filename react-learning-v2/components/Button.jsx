export const Button = ({ setCount }) => {
  return (
    <div>
      <h1>This is the functional component which renders button</h1>
      <button onClick={() => setCount((c) => c + 1)}>Click!</button>
    </div>
  );
};
