import { useState } from "react";
export function MomentumForm({ isRunning, addExercise }) {
  const [newExercise, setNewExercise] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (isRunning) return;
    if (newExercise.trim() === "") return;
    setNewExercise("");
    addExercise(newExercise);
  }
  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newExercise}
          placeholder="Input Exercise"
          onChange={(e) => setNewExercise(e.target.value.toUpperCase())}
          disabled={isRunning}
        />
        <button className="btn" disabled={isRunning}>
          Add
        </button>
      </form>
    </>
  );
}
