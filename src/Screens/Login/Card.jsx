import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardForm = ({navigation}) => {
  return (
    <View style={styles.con}>
      <Text style={{color:'white', fontSize:25, letterSpacing:5}}>LOGIN</Text>

      <View style={{ alignItems:'center'}}>
        <Text>USERNAME</Text>
        <TextInput style={{ width:200, backgroundColor:'white', textAlign:'center', marginTop:10, borderRadius:7}} placeholder='username' />
        <Text style={{marginTop:10}}>PASSWORD</Text>
        <TextInput style={{ width:200, backgroundColor:'white', textAlign:'center', marginTop:10, borderRadius:7}} placeholder='password' />
        <TouchableOpacity style={{marginTop:20, borderRadius:8, backgroundColor:'#6B705C',paddingHorizontal:12, paddingVertical:5}}>
            <Text style={{color:'white', fontWeight:'500'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent:'space-around', height:100, alignItems:'center'}}>
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center',width:180, paddingVertical:8, borderRadius:8, backgroundColor:'rgba(255, 255, 255, 0.56)' }}>
            <Image style={{width:30,height:30, marginRight:5}} source={{uri:'https://www.kibrispdr.org/data/713/mentahan-logo-google-4.jpg'}}/>
            <Text style={{color:'white', fontWeight:'500'}}>Login by Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{flexDirection:'row', alignItems:'center',justifyContent:'center', width:180,marignTop:20, paddingVertical:8, borderRadius:8, backgroundColor:'rgba(255, 255, 255, 0.56)'}}>
            {/* <Image style={{width:30,height:30, marginRight:5}} source={{uri:'https://www.kibrispdr.org/data/713/mentahan-logo-google-4.jpg'}}/> */}
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
        padding:10
    }
})