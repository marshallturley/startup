import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

export function Dashboard() {
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [totalWorkouts, setTotalWorkouts] =useState(0);
    const [weather, setWeather] = useState({ temperature: '', conditions: ''});

    useEffect(() => {
        const storedUser = localStorage.getItem('userName');
        if (storedUser) {
            setUserName(storedUser)
        }
    }, []);

    useEffect(() => {
        const mockWeather = { temperature: '72F', conditions: 'Sunny' };
        setWeather(mockWeather)
    }, []);

    useEffect(() => {
        const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        setTotalWorkouts(storedWorkouts.length);
    }, []);

    return (
    <main className="justify-content-start">
        <h2 className="mt-3 mb-5"><b>Welcome, {userName}</b></h2>
        <section className="text-center mb-5">
            <h3>Current Weather</h3>
            <div className="my-2">{weather.temperature}, {weather.conditions}</div>
        </section>
        <section className="text-center mb-5">
            <h3 className="mt-2">{userName}'s Total Workouts Logged</h3>
            <div className="my-2">{totalWorkouts}</div>
        </section>
        <section className="text-center">
            <h3>Log a New Workout</h3>
            <button type="button" onClick={() => navigate('/workout')} className="btn btn-outline-dark">New Workout</button>
        </section>
    </main>
  );
}