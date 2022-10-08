import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TopNavScreen() {
    const search = useRef(new Animated.Value(1)).current;
    const [showed,setShowed] = useState(false)

    function show () {
        Animated.spring(search,{
            toValue:showed ? 20 :1,
            useNativeDriver:true
        }).start()
    }
    useEffect(() => {
        show()
    },[showed])

  return (
    <View style={{ width:'90%', justifyContent:'space-between',flex:1, alignItems:'center', flexDirection:'row'}}>
        <Animated.View  style={{ transform:[{scaleX:search}], justifyContent:'center', alignItems:'center', width:40,height:40, borderRadius:50, backgroundColor:'#f5f5f5'}}>
            <TouchableOpacity onPress={() => setShowed(!showed)}>
                <Ionicons name={"search"} size={25} color={'#6B705C'} />
            </TouchableOpacity>
        </Animated.View>
  
  
      <TouchableOpacity style={{ width:40,height:40}}>
          <Image style={{ borderRadius:50, height:'100%',width:'100%'}} source={{uri:'https://i.pinimg.com/564x/50/41/48/504148b41e5cb14db4e111e3634cc5ca.jpg'}}/>
      </TouchableOpacity>
    </View>
  )
}