import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function StartupUnauthenticated({ onLogin }) {
        const [userName, setUsername] = React.useState(propTypes.userName);
        const [password, setPassword] = React.useState('');
        const [displayError, setDisplayError] = React.useState(null);

        async function loginUser() {
            localStorage.setItem('userName', userName);
            propTypes.onLogin(userName);
        }

        async function createUser() {
            localStorage.setItem('userName', userName);
            propTypes.onLogin(userName)
        }

        return (
            <main className="py-2">
            <h2 className="text-center">Please Login or Register Here</h2>
            <form className="text-center">
                <div>
                    <input type="text" id="username" placeholder="Username" className="inputs my-2" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input type="password" id="password" placeholder="Password" className="inputs my-2" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <Button type="button" onClick={() => loginUser()} className="btn btn-outline-dark m-2" disabled={!userName || !password}>Login</Button>
                <Button type="button" onClick={() => createUser()} className="btn btn-outline-dark m-2" disabled={!userName || !password}>Register</Button>
            </form>
            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </main>
        )
    }