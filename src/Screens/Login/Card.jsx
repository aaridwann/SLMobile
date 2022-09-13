import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import emailValidation from '../../Utils/EmailVerify'

const CardForm = ({navigation,email,password,submit}) => {
    const [data,setData] = useState({email:'',password:''})
    const [alert,setAlert] = useState(false)

    function validate(){
       data.email.length>0 && setAlert(!emailValidation(data.email) ? true : false ) 
    }
 
  return (
    <View style={styles.con}>
     
      {/* === Title === */}
      <Text style={{color:'white', fontSize:25, letterSpacing:5}}>LOGIN</Text>

      {/* ==== Input ==== */}
      <View style={{ alignItems:'center'}}>
        <Text>EMAIL</Text>
          <TextInput onBlur={validate } onChangeText={data => [email(data), setData(x =>({...x,email:data}))  ]} style={{ borderColor:'red', borderWidth:alert ? 1 : 0, color:'black', width:200, backgroundColor:'white', textAlign:'center', marginTop:10, borderRadius:7}} placeholder='username' />

        <Text style={{marginTop:10}}>PASSWORD</Text>
          <TextInput onSubmitEditing={submit} onChangeText={(data) => password(data)} secureTextEntry={true} style={{color:'black', width:200, backgroundColor:'white', textAlign:'center', marginTop:10, borderRadius:7}} placeholder='password' />


        <TouchableOpacity onPress={submit} style={{marginTop:20, borderRadius:8, backgroundColor:'#6B705C',paddingHorizontal:12, paddingVertical:5}}>
            <Text style={{color:'white', fontWeight:'500'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>


      {/* ==== Register button ==== */}
      <View style={{ justifyContent:'space-around', height:100, alignItems:'center'}}>
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center',width:180, paddingVertical:8, borderRadius:8, backgroundColor:'rgba(255, 255, 255, 0.56)' }}>
            <Image style={{width:30,height:30, marginRight:5}} source={{uri:'https://www.kibrispdr.org/data/713/mentahan-logo-google-4.jpg'}}/>
            <Text style={{color:'white', fontWeight:'500'}}>Login by Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{flexDirection:'row', alignItems:'center',justifyContent:'center', width:180,marignTop:20, paddingVertical:8, borderRadius:8, backgroundColor:'rgba(255, 255, 255, 0.56)'}}>
            <Text style={{color:'white', fontWeight:'500'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  )
}

export default CardForm

const styles = StyleSheet.create({
    con:{
        alignItems:'center',
        width:'80%',
        height:450,
        borderRadius:50,
        justifyContent:'space-around',
        backgroundColor:'#B7B7A4',
        padding:10,
        elevation: 30,
        shadowColor: '#474a3d'
    }
})