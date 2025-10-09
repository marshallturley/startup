import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Workout } from './workout/workout';
import { Leaderboard } from './leaderboard/leaderboard';

export default function App() {
  return (
    <BrowserRouter>
        <div className="app-container d-flex flex-column min-vh-100">
        <header className="border-bottom">
            <h1 className="text-center pt-4 text-white"><b>FitnessBuddy</b></h1>
            <nav>
                <menu className="nav justify-content-center">
                    <li><NavLink to='login' className="nav-link link-dark text-white">Login</NavLink></li>
                    <li><NavLink to='dashboard' className="nav-link link-dark text-white">Dashboard</NavLink></li>
                    <li><NavLink to='leaderboard' className="nav-link link-dark text-white">Leaderboard</NavLink></li>
                </menu>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/workout' element={<Workout />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="border-top">
            <span className="text-white ps-2">Marshall Turley</span>
            <div><a href="https://github.com/marshallturley/startup" className="nav-link link-dark text-white pe-2">GitHub</a></div>
        </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}