export function MomentumList({ isRunning, exercises, setExercises }) {
  //  Toggle exercise completion
  function handleToggle(id, completed) {
    setExercises((current) =>
      current.map((ex) => (ex.id === id ? { ...ex, completed } : ex))
    );
  }
  //  Delete exercise
  function handleDelete(id) {
    setExercises((current) => current.filter((ex) => ex.id !== id));
  }
  return (
    <ul>
      {exercises.map((exercise) => (
        <li key={exercise.id}>
          <input
            type="checkbox"
            checked={exercise.completed}
            onChange={(e) => handleToggle(exercise.id, e.target.checked)}
            className="m-2"
            disabled={isRunning}
          />
          <label>{exercise.title}</label> :
          <span className="m-2">{exercise.reps}</span>
          <button
            onClick={() => handleDelete(exercise.id)}
            className="btn btn-danger m-2"
            disabled={isRunning}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
