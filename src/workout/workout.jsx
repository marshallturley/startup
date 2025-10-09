import React from 'react';
import './workout.css'

export function Workout() {
  return (
    <main className="justify-content-start">
        <h2 className="mt-3 mb-1">New Workout</h2>
        <img src="https://freesvg.org/img/Dumbell2.png" alt="Dumbbell" width="200" height="200" />
        <section className="text-center">
            <div>Exercise Type:</div>
            <input type="text" id="exercisetype" placeholder="Run, Bike, Lift, etc." className=" inputs mb-2" />
            <div>Duration</div>
            <input type="text" id="duration" placeholder="# of minutes" className="inputs mb-2" />
            <div>Notes</div>
            <input type="text" id="notes" placeholder="optional" className="inputs" />
        </section>
        <button type="button" onClick="alert('Placeholder for workout logging functionality')" className="btn btn-outline-dark mt-3">Submit Workout</button>
    </main>
  );
}