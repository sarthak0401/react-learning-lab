import { useState } from "react";
import { FormUsingReactFormHook } from "../Components/FormUsingReactFormHook";

function App() {
  /*
  const [error, setError] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    return newErrors;
  };

  

  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault(); // This avoid default behavior on submit event -> which is Reload
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      console.log("Form data submitted: ", formData);
    }
  };

  // Getting the event Object (e) -> So, with input tag event e is linked which is being passed from onChange function, e is event object and that gets passed when the event occurs (Event-> Button click, Typing in a field, etc )

  // So handleChange passes the event object when the event happens
  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(formData.name);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // See we have kept the e.target.name generic, name is the attribute with each of the input field, so if the handleChange is called by email input, it will put its name there (name="email") and its value only, like e.target.value
*/

  return (
    /*
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div>
        <h6>Forms in React</h6>
        <form onSubmit={handleSubmit}>
          <label className="me-5">
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded"
            />
          </label>

          {error.name && <span> {error.name}</span>}

          <label className="me-5">
            Email:{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded"
            />
          </label>

          <button type="submit" className="border p-1 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
    */
    <FormUsingReactFormHook />
  );
}

export default App;
