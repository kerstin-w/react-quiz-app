import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

/**
 * The reducer function takes in the current state and an action, then updates the state based on the
 * action type and payload.
 * @param state - The `state` parameter in the `reducer` function represents the current state of the
 * application. It contains the data that the application needs to keep track of, such as the count and
 * step values in this case. The state is updated based on the actions dispatched to the reducer
 * function.
 * @param action - The `action` parameter in the `reducer` function is an object that represents the
 * action being dispatched. It typically has a `type` property that describes the type of action being
 * performed, and may also contain a `payload` property with additional data related to the action. The
 * reducer function uses
 * @returns The reducer function is returning a new state object based on the action type provided. The
 * state object is being updated based on the action type, such as incrementing or decrementing the
 * count, setting a new count value, setting a new step value, resetting the state to initial state, or
 * throwing an error for unknown actions.
 */
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

/**
 * The `DateCounter` function creates a component that allows users to increment or decrement
 * a count and display the resulting date.
 * @returns The `DateCounter` component is being returned. It is a functional component that displays a
 * counter with buttons to increment and decrement the count, a range input to set the step value, and
 * a button to reset the count. The component also displays a date that is calculated based on the
 * count value.
 */
function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
