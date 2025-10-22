import React from 'react';
import { StartupUnauthenticated } from './StartupUnauthenticated';
import { Dashboard } from '../dashboard/dashboard';

export function Login({userName, authState, onAuthChange}) {
    const AuthState = {
        Authenticated: 'Authenticated', Unauthenticated: 'Unauthenticated',
    }

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