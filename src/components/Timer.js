import { useEffect } from "react";

/**
 * The Timer function displays a countdown timer in minutes and seconds and
 * updates every second using useEffect.
 * @returns The Timer component is being returned.
 */
function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  /* The `useEffect` hook in the Timer component is used to set up a timer that dispatches a "tick"
  action every second. */
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
