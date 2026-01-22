export function MomentumTimer({
  isRunning,
  setIsRunning,
  exercises,
  seconds,
  setSeconds,
}) {
  //  Timer controls
  function toggleTimer() {
    if (exercises.length === 0) {
      alert("Add at least one exercise to start!");
      return;
    }
    setIsRunning((r) => !r);
  }
  //Reset the timer
  function resetTimer() {
    setIsRunning(false);
    setSeconds(0);
  }

  // Format time
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <>
      <div>
        <h1 className="Timer">
          {minutes}:{secs}
        </h1>
        <span>Amount of Exercises Added :</span>
        <h3>{exercises.length}</h3>

        <button className="btn btn-danger btn-lg m-2" onClick={toggleTimer}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="btn btn-secondary btn-lg m-2"
          onClick={resetTimer}
          disabled={isRunning}
        >
          Reset
        </button>
      </div>
    </>
  );
}
