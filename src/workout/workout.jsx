import React, { useState } from 'react';
import './workout.css'

export function Workout() {
  const [message, setMessage] = useState('');
  const [workout, setWorkout] = useState({
    exerciseType: '', duration: '', notes: '',
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setWorkout(prev => ({...prev, [id]: value}))
  }

  function submitWorkout() {
    if (!workout.exerciseType || !workout.duration) {
      setMessage('Please enter both exercise type and duration.');
      return;
    }

    const currentWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    currentWorkouts.push({...workout })
    localStorage.setItem('workouts', JSON.stringify(currentWorkouts));

    setWorkout({ exerciseType: '', duration: '', notes: '' });
    setMessage('Workout logged successfully!');
  }

  return (
    <main className="justify-content-start">
        <h2 className="mt-3 mb-1">New Workout</h2>
        <img src="https://freesvg.org/img/Dumbell2.png" alt="Dumbbell" width="200" height="200" />
        <section className="text-center">
            <div>Exercise Type:</div>
            <input type="text" id="exerciseType" value={workout.exerciseType} placeholder="Run, Bike, Lift, etc." onChange={handleChange} className=" inputs mb-2" />
            <div>Duration</div>
            <input type="text" id="duration" value={workout.duration} placeholder="# of minutes" onChange={handleChange} className="inputs mb-2" />
            <div>Notes</div>
            <input type="text" id="notes" value={workout.notes} placeholder="optional" onChange={handleChange} className="inputs" />
        </section>

        {message && <div>{message}</div>}

        <button type="button" onClick={submitWorkout} className="btn btn-outline-dark mt-3" disabled={!workout.exerciseType || !workout.duration}>Submit Workout</button>
    </main>
  );
}