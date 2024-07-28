// pages/signup.tsx
import React from 'react';

const SignupPage = () => {
  const handleSignup = () => {
    // Mock signup logic
    console.log('Signing up...');
  };

  return (
    <div>
      <h1>Signup</h1>
      <button onClick={handleSignup}>Signup with Email</button>
      <button onClick={handleSignup}>Signup with Google</button>
      <button onClick={handleSignup}>Signup with Apple</button>
    </div>
  );
};

export default SignupPage;
