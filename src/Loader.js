/**
 * The function `Loader` returns displaying a loading spinner and a message indicating
 * that questions are being loaded.
 * @returns A JSX element representing a loader component with a container div, a loader element, and a
 * paragraph element displaying "Loading questions...".
 */
export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
