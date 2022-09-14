import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TopNavScreen() {
  return (
    <View style={{ width:'90%', justifyContent:'space-between',flex:1, alignItems:'center', flexDirection:'row'}}>
        <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', width:40,height:40, borderRadius:50, backgroundColor:'#f5f5f5'}}>
            <Ionicons name={"search"} size={25} color={'#6B705C'} />
        </TouchableOpacity>
  
  
      <TouchableOpacity style={{ width:40,height:40}}>
          <Image style={{ borderRadius:50, height:'100%',width:'100%'}} source={{uri:'https://i.pinimg.com/564x/50/41/48/504148b41e5cb14db4e111e3634cc5ca.jpg'}}/>
      </TouchableOpacity>
    </View>
  )
}