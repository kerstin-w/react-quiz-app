/**
 * The NextButton function conditionally renders a "Next" button or a "Finish" button based on the
 * current question index and total number of questions.
 * @returns A button element is being returned based on the conditions provided in the NextButton
 * function. If the answer is not null and the index is less than the total number of questions minus
 * 1, a "Next" button is returned with an onClick event that dispatches the "nextQuestion" action. If
 * the index is equal to the total number of questions minus 1, a "Finish" button is
 */
function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
