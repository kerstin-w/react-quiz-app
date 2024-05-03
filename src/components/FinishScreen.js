/**
 * The `FinishScreen` function displays the user's quiz score, highscore, and an emoji based on their
 * performance, allowing them to restart the quiz.
 * @returns The `FinishScreen` component is returning JSX elements that display the user's quiz score,
 * highscore, and a button to restart the quiz. The JSX elements include a paragraph displaying the
 * user's score, a paragraph displaying the highscore, and a button with an onClick event to dispatch a
 * "restart" action.
 */
function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
