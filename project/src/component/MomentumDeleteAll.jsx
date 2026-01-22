export function MomentumDeleteAll({ exercises, setExercises, isRunning, }) {
  //Reset exercises
  function handelReset() {
    if (isRunning) return;
    setExercises([]);
  }
  return (
    <>
      {exercises.length !== 0 ? (
        <button
          onClick={handelReset}
          className="btn btn-danger m-2 sm"
          disabled={isRunning}
        >
          Delete All
        </button>
      ) : null}
    </>
  );
}
