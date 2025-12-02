import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WorkoutNotifications } from './notifications';
import './dashboard.css';

export function Dashboard() {
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [totalWorkouts, setTotalWorkouts] =useState(0);
    const [weather, setWeather] = useState({ temperature: '', precipitation: ''});

    useEffect(() => {
        const storedUser = localStorage.getItem('userName');
        if (storedUser) {
            setUserName(storedUser)
        }
    }, []);

    useEffect(() => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=40.2338&longitude=-111.6585&hourly=temperature_2m,precipitation&timezone=America%2FDenver&forecast_days=3&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch')
            .then(res => res.json())
            .then(data => {
                setWeather({
                    temperature: data.hourly.temperature_2m[0],
                    precipitation: data.hourly.precipitation[0]
                });
            });
    }, []);

    useEffect(() => {
        fetch('/api/workouts', {
            credentials: 'include',
        })
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch workouts');
                return response.json();
            })
            .then(workouts => {
                setTotalWorkouts(workouts.length);
            })
            .catch(error => {
                console.error(error);
                setTotalWorkouts(0);
            })
    }, []);

    return (
    <main className="justify-content-start">
        <h2 className="mt-3 mb-5"><b>Welcome, {userName}</b></h2>

        <WorkoutNotifications userName={userName} />

        <section className="text-center mb-5">
            <h3>Current Weather</h3>
            <div className="my-2">Temperature: {weather.temperature}</div>
            <div className="my-2">Precipitation (in Inches): {weather.precipitation}</div>
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