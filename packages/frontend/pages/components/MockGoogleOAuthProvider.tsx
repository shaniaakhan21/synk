import React, { ReactNode } from 'react';

const MockGoogleOAuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default MockGoogleOAuthProvider;
