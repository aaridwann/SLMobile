import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import Navigation from '../../Navigation';

export const AuthContext = createContext();

function AuthProvider() {
  const [auth, setAuth] = useState({user:{},token:null,loading:true});

  async function GetAuth(){
    try {
      const res = await AsyncStorage.getItem('auth')
      if(!res) return console.log('kosong chuyy')
      const data = JSON.parse(res)
      return setAuth({...data, user:data.user,token:data.token,loading:false})
    } catch (error) {
      return console.log(error)
    }
  }
  
  useEffect(()=> {
    GetAuth()
  },[])

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <Navigation />
    </AuthContext.Provider>
  );
}

export default AuthProvider;
