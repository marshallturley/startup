import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function StartupUnauthenticated({ onLogin }) {
        const [userName, setUsername] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [displayError, setDisplayError] = React.useState(null);
        const navigate = useNavigate();

        async function loginOrCreate(endpoint) {
            const response = await fetch(endpoint, {
                method: 'post',
                body: JSON.stringify({ email: userName, password: password }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            });
            if (response?.status === 200) {
                localStorage.setItem('userName', userName);
                onLogin(userName);
                navigate('/dashboard');
            } else {
                const body = await response.json();
                setDisplayError(`⚠ Error: ${body.msg}`);
            }
        }

        return (
            <main className="py-2">
            <h2 className="text-center">Please Login or Register Here</h2>
            <form className="text-center" onSubmit={e => e.preventDefault()}>
                <div>
                    <input type="text" id="username" placeholder="Username" className="inputs my-2" value={userName} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input type="password" id="password" placeholder="Password" className="inputs my-2" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button type="button" variant="outline-dark" onClick={() => loginOrCreate('/api/auth/login')} className="btn btn-outline-dark m-2" disabled={!userName || !password}>Login</Button>
                <Button type="button" variant="outline-dark" onClick={() => loginOrCreate('/api/auth/create')} className="btn btn-outline-dark m-2" disabled={!userName || !password}>Register</Button>
            </form>
            {displayError && <div>{displayError}</div>}
        </main>
        )
    }