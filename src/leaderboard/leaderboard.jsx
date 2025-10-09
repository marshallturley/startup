import React from 'react';
import './leaderboard.css'

export function Leaderboard() {
  return (
    <main className="justify-content-start">
        <h2 className="mt-3">Top FitnessBuddy Users</h2>
        <img src="https://freesvg.org/img/1297919410.png" alt="trophy" height="150" width="150" />
        <p className="text-center my-3">Below is a placeholder for the leaderboard that will use WebSocket to provide real time updates as new workouts are logged.</p>

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
                <tr>
                    <td>1</td>
                    <td>User1</td>
                    <td>7</td>
                    <td>280</td>
                </tr>
                <tr>
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
                </tr>
            </tbody>
        </table>
    </main>
  );
}