// pages/login.tsx
import React from 'react';

const LoginPage = () => {
  const handleLogin = () => {
    // Mock login logic
    console.log('Logging in...');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login with Email</button>
      <button onClick={handleLogin}>Login with Google</button>
      <button onClick={handleLogin}>Login with Apple</button>
    </div>
  );
};

export default LoginPage;
