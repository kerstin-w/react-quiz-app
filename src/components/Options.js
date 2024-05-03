/**
 * The Options function renders a list of buttons representing answer options for a question, with
 * styling based on whether the answer is correct or incorrect.
 * @returns The Options component renders a list of buttons representing different options for a
 * question. Each button has a click event handler that dispatches a new answer to the question based
 * on the index of the option selected. The button styling changes based on whether the question has
 * been answered, if the selected option is the correct answer, or if it is the wrong answer. The
 * disabled attribute is set to prevent selecting an option
 */
function Options({ question, dispatch, answer }) {
  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswerd}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
