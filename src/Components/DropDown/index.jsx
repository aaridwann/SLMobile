import { Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const EventCategory = ['wedding','prewedding','engagement','party']

export default function DropDownComponent({style, value='choose one',select,color='black'}) {
    const [data,setData] = useState(value)
    const [show,setShow] = useState(false)
    const dropDown  = useRef(new Animated.Value(0)).current
     
    function changeHandler(e){
        setData(e)
        setShow(false)
        select(e)
    }
    useEffect(() => {
        Animated.timing(dropDown,{
            toValue: show ? 200 : 0,
            duration:200,
            useNativeDriver:false
        }).start()
    },[show])
    
  return (
    <View style={[style,{alignItems:'center', justifyContent:'center', width:'100%'}]}>
        <TouchableOpacity onPress={() => setShow(!show)} style={{ justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
          <Text style={{ marginHorizontal:10 ,fontSize:15, fontWeight:'600', color:color}}>{data.slice(0,1).toUpperCase()+data.slice(1,data.length)}</Text>
          <Ionicons name={"caret-down"} size={20} color={color} />
        </TouchableOpacity>

        <Animated.ScrollView style={{height:dropDown, width:'100%'}} contentContainerStyle={{backgroundColor:color, paddingVertical:15, width:'100%', marginTop:10, alignItems:'center'}}>
            <Ionicons onPress={() => setShow(false)} style={{ position:'absolute', top:10, right:10}} name={"close"} size={20} color={'white'} />
            {EventCategory.map((x,i) => (
                <TouchableOpacity key={i} onPress={() => changeHandler(x)} style={{marginVertical:4}}>
                    <Text style={{fontSize:18, fontWeight:'500', color:color =='#B7B7A4' ? 'white':'#B7B7A4'}}>{x.slice(0,1).toUpperCase()+x.slice(1,x.length)}</Text>
                </TouchableOpacity>
            ))}
        </Animated.ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({})