import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import emailValidation from '../../Utils/EmailVerify';
import AppAxios from '../../Utils/AppAxios';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import { BASE_URL } from '../../config';

const RegisterScreen = ({navigation}) => {
  const [data,setData] = useState({name:'',email:'',password:'',confirmationPassword:''})
  const [loading,setLoading] = useState(false)
  const [warning,setWarning] = useState([])
  const [message,setMessage] = useState('')
  
  function checkName(){
    data.name.length <= 5 || data.name == '' || data.name.trim().length == 0 ? 
    setWarning([...warning, 'name']) : setWarning(warning.filter(data => data !== 'name'))
  }
  function checkPasswordLength(){
    data.password.length <= 5 || data.password == '' || data.password.trim().length == 0 ? 
    setWarning([...warning, 'password']) : setWarning(warning.filter(data => data !== 'password'))
  }
  function checkConfirmationPassword(){
    data.password !== data.confirmationPassword || data.confirmationPassword == '' || data.confirmationPassword.trim().length == 0 ?
     setWarning([...warning, 'confirmationPassword' ]) : setWarning(warning.filter(data => data !== 'confirmationPassword'))
  }
  function checkEmail(){
    !emailValidation(data.email) || data.email == '' || data.email.trim().length == 0 ?
     setWarning([...warning, 'email']) : setWarning(warning.filter(data => data !== 'email'))
  }
  async function submit(){
    if(warning.length !== 0 ){
      return console.log('belum oke');
    }
    setLoading(true)
    try {
        await axios.post(`${BASE_URL}/auth/register`,data)
          setMessage('Success Register')
          setData({...data, name:'',email:'',password:'',confirmationPassword:''})
          setLoading(false)
          navigation.push('Login',{email:data.email})
        } catch (error) {
          setMessage(error.response.data)
        }
        setLoading(false)
  }

  useEffect(() => {
    message.length > 0 && setTimeout(() => {setMessage("")},3000)
  },[message])

  return (
    <ScrollView  contentContainerStyle={styles.con}>
      {message && <Text style={{ position:'absolute', top:'20%', color:'white', fontWeight:'700', fontSize:20}}>{message}</Text>}
       <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{ color: '#FFF'}}
        />
      <View style={{width:'80%', height:300, alignItems:'center', justifyContent:'space-between', paddingVertical:10, flex:0.8, backgroundColor:'rgba(255, 255, 255, 0.60)'}}>
        
        <Pressable onPress={() => navigation.navigate('Login')} style={{ alignSelf:'flex-end'}}>
        <Ionicons name={"close-outline"} size={50} color={'white'} />
        </Pressable>


      <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
            <TextInput value={data.name} onBlur={checkName} autoFocus={true} maxLength={40} onChangeText={(e) => setData({...data, name:e})} 
              style={{ color:'#A5A58D', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, borderBottomColor:warning.includes('name') ? 'orange': 'white',
              width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='Fullname'/>
            <TextInput value={data.email} onBlur={checkEmail} maxLength={30} onChangeText={(e) => setData({...data, email:e})} 
              style={{ color:'#A5A58D', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, 
              borderBottomColor:warning.includes('email') || message == 'email already used'? 'orange': 'white',
              width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='EMAIL'/>
            <TextInput value={data.password} maxLength={20} secureTextEntry={true} onBlur={checkPasswordLength} onChangeText={(e) => setData({...data, password:e})}
              style={{ color:'#A5A58D', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, borderBottomColor:warning.includes('password') ? 'orange': 'white',
              width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='PASSWORD'/>
            <TextInput value={data.confirmationPassword} maxLength={20} secureTextEntry={true} onBlur={checkConfirmationPassword} onChangeText={(e) => setData({...data, confirmationPassword:e})}
              style={{ color:'#A5A58D', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, borderBottomColor:warning.includes('confirmationPassword') ? 'orange': 'white',
              width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='CONFIRMATION PASSWORD'/>
          <TouchableOpacity disabled={warning.length>0} onPress={submit} style={{ width:170, backgroundColor:'#A5A58D', marginTop:30, justifyContent:'center', alignItems:'center', paddingVertical:10}}>
            <Text style={{ color:'white'}}>REGISTER</Text>
          </TouchableOpacity>
      </View>


      {/* === 3 === */}
      <View style={{alignItems:'flex-start'}}>
        <Text style={{color:'#A5A58D'}}>have a account</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={{color:'#A5A58D'}}>LOGIN HERE ?</Text>
        </Pressable>
      </View>


      </View>


    </ScrollView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  con:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#A5A58D',
  }
})