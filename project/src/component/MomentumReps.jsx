export function MomentumReps({ isRunning, newReps, setNewReps }) {
  //  Add reps
  function repsAddition() {
    if (isRunning) return;
    setNewReps((r) => r + 1);
  }

  // Subtract reps
  function repsSubtraction() {
    if (isRunning) return;
    setNewReps((r) => Math.max(r - 1, 0));
  }
  return (
    <>
      <span>
        <label className="m-2">REPS:</label>
        <button
          className="btn-reps m-2"
          onClick={repsSubtraction}
          disabled={isRunning}
        >
          -
        </button>
        <span>{newReps}</span>
        <button
          className="btn-reps m-2"
          onClick={repsAddition}
          disabled={isRunning}
        >
          +
        </button>
      </span>
    </>
  );
}
