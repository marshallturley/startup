import React from 'react';

export function Login() {
  return (
    <main className="py-2">
            <h2 className="text-center">Please Login or Register Here</h2>
            <form className="text-center">
                <div>
                    <input type="text" id="username" placeholder="Username" className="inputs my-2"/>
                </div>
                <div>
                    <input type="password" id="password" placeholder="Password" className="inputs my-2"/>
                </div>
                <button type="button" onclick="alert('Login functionality placeholder')" className="btn btn-outline-dark m-2">Login</button>
                <button type="button" onclick="alert('Register functionality placeholder')" className="btn btn-outline-dark m-2">Register</button>
            </form>
        </main>
  );
}