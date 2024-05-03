import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";

const initialState = {
  questions: [],

  // loading, error, ready, acttive, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Invalid action type");
  }
}

export default function App() {
  const [{ quesion, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions").then((res) =>
      res
        .json()
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((err) => dispatch({ type: "dataFailed" }))
    );
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>{status === "loading" && <Loader />}</Main>
    </div>
  );
}
