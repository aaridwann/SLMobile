import React from 'react';
import AuthProvider from '../Context/AuthContext';
import LocationProvider from '../Context/LocationContext';
import Navigation from '../Navigation';

function ProviderApp() {
  return (
    <AuthProvider>
      <LocationProvider>
        <Navigation />
      </LocationProvider>
    </AuthProvider>
  );
}

export default ProviderApp;
