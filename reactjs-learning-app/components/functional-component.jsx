// We define the components by writing the functions

/*
function FunctionalComponent() {
  return (
    <div>
      <h1>This is the functional component</h1>
    </div>
  );
}
*/

// We can use arrow function as well

const FunctionalComponent = () => {
  return (
    <div>
      <h1 className="title">Functional component!</h1>
    </div>
  );
};
export default FunctionalComponent;

// We need to use this exported component in App.jsx to show it, because App() is set as the root component
