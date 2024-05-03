import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const SECS_PER_QUESTION = 20;

const initialState = {
  questions: [],

  // loading, error, ready, acttive, finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

/**
 * The reducer function handles different actions to update the state in a quiz application.
 * @param state - The `state` parameter in the `reducer` function represents the current state of the
 * application. It contains various pieces of data that are used to manage the state of the
 * application, such as questions, status, points, index, answer, secondsRemaining, and highscore. The
 * reducer function takes
 * @param action - The `action` parameter in the `reducer` function represents an object that contains
 * information about the action being dispatched. It typically has a `type` property that describes the
 * type of action being performed, as well as an optional `payload` property that can hold additional
 * data relevant to the action.
 * @returns The reducer function takes in the current state and an action, then based on the action
 * type, it updates and returns a new state object. The return value depends on the action type:
 */
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Invalid action type");
  }
}

/**
 * The `App` function in JavaScript is a component that manages a quiz application, fetching questions
 * from a server, displaying different screens based on the quiz status, and handling user
 * interactions.
 * @returns The `App` component is being returned. It contains various conditional rendering based on
 * the `status` state, such as displaying a loader when loading, an error component when there is an
 * error, a start screen when ready, the quiz questions when active, and a finish screen when the quiz
 * is finished.
 */
export default function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  /* This is calculating the maximum possible points that can be earned in the quiz. It is
using the `reduce` method on the `questions` array to iterate over each question and accumulate the
points of each question. The initial value of the accumulator is set to 0. */
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  /* This `useEffect` hook is making a network request to fetch data from the specified URL
  when the component mounts.*/
  useEffect(function () {
    fetch(
      "https://my-json-server.typicode.com/kerstin-w/react-quiz-app/questions"
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <footer>
              <Footer>
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                />
                <NextButton
                  dispatch={dispatch}
                  answer={answer}
                  numQuestions={numQuestions}
                  index={index}
                />
              </Footer>
            </footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
