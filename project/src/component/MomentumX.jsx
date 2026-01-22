import { useState, useEffect } from "react";
import { MomentumTimer } from "./MomentumTimer";
import { MomentumForm } from "./MomentumForm";
import { MomentumHeader } from "./MomentunHeader";
import { MomentumList } from "./MomentumList";
import { MomentumDeleteAll } from "./MomentumDeleteAll";
import { MomentumReps } from "./MomentumReps";
import "./MomentumX.css";
export default function MomentumX() {
  const [newReps, setNewReps] = useState(0);
  const [exercises, setExercises] = useState(() => {
    return JSON.parse(localStorage.getItem("ITEMS")) || [];
  });
  const [seconds, setSeconds] = useState(() => {
    return parseInt(localStorage.getItem("SECONDS"), 10) || 0;
  });
  const [isRunning, setIsRunning] = useState(false);
  // Add new exercise
  function addExercise(title) {
    setExercises((current) => [
      ...current,
      { id: Date.now(), title, completed: false, reps: newReps },
    ]);
    setNewReps(0);
  }

  // Save exercises to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(exercises));
  }, [exercises]);

  // Save seconds to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("SECONDS", seconds);
  }, [seconds]);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <div>
        <MomentumHeader />
        <MomentumTimer
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          exercises={exercises}
          setSeconds={setSeconds}
          seconds={seconds}
        />
      </div>

      <MomentumForm isRunning={isRunning} addExercise={addExercise} />
      <MomentumReps
        isRunning={isRunning}
        newReps={newReps}
        setNewReps={setNewReps}
      />
      <h1>Exercises</h1>
      <span>
        <MomentumDeleteAll
          isRunning={isRunning}
          setExercises={setExercises}
          exercises={exercises}
        />
      </span>
      <span> {exercises.length === 0 && "No Exercise Added Yet"}</span>
      <MomentumList
        setExercises={setExercises}
        exercises={exercises}
        isRunning={isRunning}
        setNewReps={setNewReps}
      />
    </>
  );
}
