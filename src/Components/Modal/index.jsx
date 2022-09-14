import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ModalScreen({img,close}) {
    const show = useRef(new Animated.Value(1000)).current;

    const closeModal = () => {
        Animated.spring(show,{
            toValue:1000,
            delay:0,
            useNativeDriver:true
        }).start()
    }

    useEffect(() => {
       img.state ? Animated.spring(show,{
            toValue:0,
            delay:0,
            useNativeDriver:true
        }).start() :
        closeModal()
    },[img.state])

  return (
    <Animated.View style={{ left:0, transform:[{translateX:show}], backgroundColor:'rgba(20, 20, 20, 0.74)', width:'100%', zIndex:10, height:'100%', position:'absolute', justifyContent:'center',alignItems:'center', flex:1}}>
         <TouchableOpacity onPress={() => close(false)} style={{ position:'absolute', zIndex:10, top:'10%', right:'10%', justifyContent:'center', alignItems:'center', width:50,height:50}}>
            <Ionicons name={"close"} size={35} color={'white'} />
        </TouchableOpacity>
            <Image style={{height:'80%', width:'80%'}} source={{uri:img.img}} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({})