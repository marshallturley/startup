import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function StartupUnauthenticated({ onLogin }) {
        const [userName, setUsername] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [displayError, setDisplayError] = React.useState(null);
        const navigate = useNavigate();

        async function loginUser() {
            localStorage.setItem('userName', userName);
            onLogin(userName);
            navigate('/dashboard')
        }

        async function createUser() {
            localStorage.setItem('userName', userName);
            onLogin(userName)
            navigate('/dashboard')
        }

        return (
            <main className="py-2">
            <h2 className="text-center">Please Login or Register Here</h2>
            <form className="text-center">
                <div>
                    <input type="text" id="username" placeholder="Username" className="inputs my-2" value={userName} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input type="password" id="password" placeholder="Password" className="inputs my-2" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button type="button" variant="outline-dark" onClick={() => loginUser()} className="btn btn-outline-dark m-2" disabled={!userName || !password}>Login</Button>
                <Button type="button" variant="outline-dark" onClick={() => createUser()} className="btn btn-outline-dark m-2" disabled={!userName || !password}>Register</Button>
            </form>
            {displayError && <div>{displayError}</div>}
        </main>
        )
    }