import { ScrollView, StyleSheet, View} from 'react-native';
import  {DotIndicator} from 'react-native-indicators';
import React, { useContext, useState } from 'react';
import jwt_decode from "jwt-decode";
import TopScreen from './top';
import LinearGradient from 'react-native-linear-gradient';
import CardForm from './Card';
import axios from 'axios'
import { LOGIN_URL } from '../../config';
import { AuthContext } from '../../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const {auth,setAuth} = useContext(AuthContext)
  const [data,setData] = useState({email:'',password:''})
  const [loading,setLoading] = useState(false)

  async function Login (){
    setLoading(true)
    try {
      const res = await axios.post(LOGIN_URL,data)
      const {token} = res.data
      const decode = jwt_decode(token)
      const user = {user:decode,token:token}

      await AsyncStorage.setItem('auth',JSON.stringify(user))
      setAuth({...auth,user:decode,token:token})

    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return loading ? <DotIndicator color='white' /> : (
  <ScrollView style={{flex:1, backgroundColor:'#6B705C', width:'100%', paddingBottom:10}}>
    <LinearGradient colors={['#FFFFFF', '#6B705C']} style={styles.con}>
        <View style={{height: 200, width: '100%'}}>
            <TopScreen />
        </View>

        <View style={{width: '100%',marginTop:20,flex: 1,justifyContent: 'center',alignItems: 'center'}}>
            <CardForm submit={Login} email={(e) => setData({...data, email:e})} password={e => setData({...data, password:e})} navigation={navigation} />
        </View>
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
