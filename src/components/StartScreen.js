/**
 * The StartScreen component displays a welcome message for a React quiz with the number
 * of questions and a button to start the quiz.
 * @returns The StartScreen component is being returned. It is a functional component that displays a
 * welcome message for a React Quiz, the number of questions to test React mastery, and a button to
 * start the quiz.
 */
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
