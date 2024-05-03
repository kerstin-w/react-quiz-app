import Options from "./Options";

/**
 * The function `Question` renders a question and its options.
 * @returns The `Question` component is being returned. It displays the question text and renders the
 * `Options` component passing down the question, dispatch function, and answer as props.
 */
function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
