export const Prop_drilling = () => {
  const theme = "dark";
  return (
    <div style={{ border: "2px solid yellow", padding: "20px" }}>
      <h1>Parent container</h1>
      <ComponentA theme={theme} />
    </div>
  );
};

function ComponentA({ theme }) {
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h1>Child container</h1>
      <ComponentB theme={theme} />
    </div>
  );
}

function ComponentB({ theme }) {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <h1>Grand child container</h1>
      <ComponentC theme={theme} />
    </div>
  );
}

function ComponentC({ theme }) {
  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h1>Great grand child container</h1>
      <p>Theme is : {theme}</p>
    </div>
  );
}
