import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.con}>
      <View style={{width:'80%', height:300, alignItems:'center', justifyContent:'space-between', paddingVertical:10, flex:0.8, backgroundColor:'rgba(255, 255, 255, 0.60)'}}>
        <Pressable onPress={() => navigation.navigate('Login')} style={{ alignSelf:'flex-end'}}>
        <Ionicons name={"close-outline"} size={50} color={'white'} />
        </Pressable>


<View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
      <TextInput style={{ color:'white', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, borderBottomColor:'white', width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='Fullname'/>
      <TextInput style={{ color:'white', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, borderBottomColor:'white', width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='USERNAME'/>
      <TextInput style={{ color:'white', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, borderBottomColor:'white', width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='EMAIL'/>
      <TextInput style={{ color:'white', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, borderBottomColor:'white', width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='PASSWORD'/>
      <TextInput style={{ color:'white', fontSize:15, fontWeight:'bold', textAlign:'center', borderBottomWidth:2, borderBottomColor:'white', width:'75%', paddingHorizontal:10, marign:'auto'}} placeholder='CONFIRMATION PASSWORD'/>
    <TouchableOpacity style={{ width:170, backgroundColor:'#A5A58D', marginTop:30, justifyContent:'center', alignItems:'center', paddingVertical:10}}>
      <Text style={{ color:'white'}}>REGISTER</Text>
    </TouchableOpacity>
</View>


{/* === 3 === */}

<View style={{alignItems:'flex-start'}}>
  <Pressable>
  <Text style={{color:'#A5A58D'}}>have a account</Text>
  <Text style={{color:'#A5A58D'}}>LOGIN HERE ?</Text>
  </Pressable>

</View>


      </View>


    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  con:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#A5A58D'
  }
})