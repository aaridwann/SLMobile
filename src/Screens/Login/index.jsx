import { ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import TopScreen from './top';
import LinearGradient from 'react-native-linear-gradient';
import CardForm from './Card';
import axios from 'axios'
import { LOGIN_URL } from '../../config';
import { AuthContext } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../Splash Screen';

const LoginScreen = ({navigation}) => {
  const {auth,setAuth} = useContext(AuthContext)
  const [data,setData] = useState({email:'',password:''})
  const [loading,setLoading] = useState(false)
  const [message,setMessage] = useState('')

  async function Login (){
    setLoading(true)
      const res = await axios.post(LOGIN_URL,data)
      .then(async res => {
        const {token} = res.data
        const decode = jwt_decode(token)
        const user = {user:decode,token:token}
        await AsyncStorage.setItem('auth',JSON.stringify(user))
        setAuth({...auth,user:decode,token:token})
        setLoading(false)
      })
      .catch((err) =>{
        setMessage(err.response.data.message)
        setLoading(false)
        })
  }

  useEffect(() => {
    message.length !== 0 && setTimeout(() => {
      setMessage('')
    },3000)
  },[message])


  return loading ?
  <SplashScreen/>
   : (
  <ScrollView style={{flex:1, backgroundColor:'#6B705C', width:'100%', paddingBottom:10}}>
    <LinearGradient colors={['#FFFFFF', '#6B705C']} style={styles.con}>
        <View style={{height: 200, width: '100%'}}>
            <TopScreen />
        </View>
        <View style={{width: '100%', padding:20,marginTop:20,flex: 1, paddingBottom:50,justifyContent: 'center',alignItems: 'center'}}>
            <CardForm submit={Login} email={(e) => setData({...data, email:e})} password={e => setData({...data, password:e})} navigation={navigation} />
        </View>
        {message && 
        <Text style={{ position:'absolute', top:'28%', letterSpacing:2, backgroundColor:'rgba(255, 255, 255, 0.5)', fontSize:18, paddingHorizontal:20, paddingVertical:8, color:'#6B705C'}}>{message}</Text>}
    </LinearGradient>
  </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
