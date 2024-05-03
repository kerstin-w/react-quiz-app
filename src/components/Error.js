/**
 * The function Error returns a JSX element displaying an error message.
 * @returns The Error component is being returned. It is a paragraph element with a className of
 * "error" containing a span element with a "💥" emoji and text "There was an error fetching
 * questions."
 */
function Error() {
  return (
    <p className="error">
      <span>💥</span> There was an error fecthing questions.
    </p>
  );
}

export default Error;
