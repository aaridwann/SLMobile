import React, {createContext, useState} from 'react';
import Navigation from '../../Navigation';

const AuthContext = createContext();

function AuthProvider() {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <Navigation />
    </AuthContext.Provider>
  );
}

export default AuthProvider;
