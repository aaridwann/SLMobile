import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer, useState} from 'react';
import Navigation from '../../Navigation';
import ChatService from '../../Utils/ChatService';
import AuthReducer, {
  ActionTypeUser,
  initialUserState,
} from '../Reducer/AuthReducer';

export const AuthContext = createContext();

function AuthProvider({children}) {
  const [stateAuth, dispatchAuth] = useReducer(AuthReducer, initialUserState);

  async function GetAuth() {
    const res = await AsyncStorage.getItem('auth');
    if (!res)
      return dispatchAuth({type: ActionTypeUser.doneFetch, payload: null});
    return dispatchAuth({type: ActionTypeUser.doneFetch, payload: res});
  }

  useEffect(() => {
    GetAuth();
  }, []);

  return (
    <AuthContext.Provider value={{stateAuth, dispatchAuth}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
