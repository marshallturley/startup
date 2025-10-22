import React from 'react';
import { StartupUnauthenticated } from './StartupUnauthenticated';
import { Dashboard } from './Dashboard';
import {AuthState } from './AuthState';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main>
        {authState === AuthState.Authenticated && (
            <Dashboard userName={userName} onLogout={() => onAuthChange('', AuthState.Unauthenticated)} />
        
        )}
        {authState === AuthState.Unauthenticated && (
            <StartupUnauthenticated onLogin={(loginUserName) => onAuthChange(loginUserName, AuthState.Authenticated)} />
        )}
    </main>
  );
}