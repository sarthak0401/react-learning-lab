import { useReducer } from "react";

export function UseReducerExample() {
  const initialState = {
    showTextFlag: false,
    changeStyleFlag: false,
  };

  // THis reducer function must be of same name as defined in the useReducer method
  function reducer(state, action) {
    switch (action.type) {
      case "HIDE_TEXT":
        return {
          // IMP : We need to destruct state first to access the state variables from state, then we can update/modify
          ...state,
          showTextFlag: false,
        };
      case "SHOW_TEXT":
        return {
          ...state,
          showTextFlag: true,
        };

      case "TOGGLE_TEXT":
        return {
          ...state,
          changeStyleFlag: !state.changeStyleFlag,
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.showTextFlag ? (
        <h1 style={{ backgroundColor: state.changeStyleFlag ? "red" : "" }}>
          This is the text
        </h1>
      ) : (
        ""
      )}
      <button onClick={() => dispatch({ type: "HIDE_TEXT" })}>Hide text</button>
      <button onClick={() => dispatch({ type: "SHOW_TEXT" })}>Show text</button>
      <button onClick={() => dispatch({ type: "TOGGLE_TEXT" })}>
        Toggle text style
      </button>
    </div>
  );
}
