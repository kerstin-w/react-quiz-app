/**
 * The Progress function displays progress information for a quiz or questionnaire, including the
 * current question number, total questions, points earned, and maximum possible points.
 * @returns The `Progress` component is being returned. It displays the progress of a quiz or
 * questionnaire, showing the current question number out of the total number of questions, the points
 * earned so far, and the maximum possible points. It also includes a progress bar indicating the
 * completion status of the quiz.
 */
function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
