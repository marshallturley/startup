import React, { useState, useEffect } from 'react';
import './leaderboard.css'

export function Leaderboard() {
    const [leaderboard, setLeaderboard] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/workouts')
            .then((response) => response.json())
            .then((workouts) => {
                const userStats = {};
                for (const w of workouts) {
                    const user = w.userName || 'Unknown';
                    if (!userStats[user]) {
                        userStats[user] = { totalWorkouts: 0, totalTime: 0}
                    }
                    userStats[user].totalWorkouts++;
                    userStats[user].totalTime += Number(w.duration) || 0;
                }
                const sorted = Object.entries(userStats)
                    .map(([userName, stats]) => ({ userName, ...stats }))
                    .sort((a,b) => b.totalTime - a.totalTime);
                setLeaderboard(sorted);    
            });
    }, []);

  return (
    <main className="justify-content-start">
        <h2 className="mt-3">Top FitnessBuddy Users</h2>
        <img src="https://freesvg.org/img/1297919410.png" alt="trophy" height="150" width="150" />
        <p className="text-center my-3">Leaderboard dynamically generated from workouts logged by users.</p>

        <table className="table table-striped table-bordered text-center my-2">
            <thead className="tab-head">
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Workouts</th>
                    <th>Total Time</th>
                </tr>
            </thead>
            <tbody>
                {leaderboard.map((user,index) => (
                <tr key={user.userName}>
                    <td>{index + 1}</td>
                    <td>{user.userName}</td>
                    <td>{user.totalWorkouts}</td>
                    <td>{user.totalTime}</td>
                </tr>
                ))}
                {/* <tr>
                    <td>2</td>
                    <td>User2</td>
                    <td>4</td>
                    <td>160</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>User3</td>
                    <td>1</td>
                    <td>30</td>
                </tr> */}
            </tbody>
        </table>
    </main>
  );
}