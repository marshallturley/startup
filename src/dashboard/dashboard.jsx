import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

export function Dashboard() {
    const navigate = useNavigate();
    return (
    <main className="justify-content-start">
        <h2 className="mt-3 mb-5"><b>Welcome, [Username]</b></h2>
        <section className="text-center mb-5">
            <h3>Current Weather</h3>
            <div className="my-2">Placeholder for 3rd party weather info (temperature, conditions)</div>
        </section>
        <section className="text-center mb-5">
            <h3 className="mt-2">[Username]'s Total Workouts Logged</h3>
            <div className="my-2">Placeholder for total workout number pulled from the database</div>
        </section>
        <section className="text-center">
            <h3>Log a New Workout</h3>
            <button type="button" onClick={() => navigate('/workout')} className="btn btn-outline-dark">New Workout</button>
        </section>
    </main>
  );
}