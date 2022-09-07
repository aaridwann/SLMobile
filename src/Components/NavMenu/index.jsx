import {Animated, Pressable, StyleSheet, Text,  TouchableOpacity, View} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavbarComponent = () => {
    const [show,setShow] = useState(false)
    const height = useRef(new Animated.Value(0)).current;
    console.log(height)

    useEffect(() => {
        Animated.spring(height,{
            toValue:show ? 499 : 0,
            delay:100
        }).start()
    },[show])

  return (
    <>
    <View style={styles.con}>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Ionicons name={'menu-outline'} size={50} color={'white'} />
      </TouchableOpacity>
    </View>
    <Animated.View style={{ left:height, display:`${show ? 'none' : 'flex'}`, justifyContent:'space-evenly', alignItems:'center', height:300, width:'100%', backgroundColor:'lightblue'}}>
        <Text style={{ color:'white'}}>Hello World</Text>
        <Text style={{ color:'white'}}>Hello World</Text>
        <Text style={{ color:'white'}}>Hello World</Text>
        <Text style={{ color:'white'}}>Hello World</Text>
    </Animated.View>
    </>
  );
};

export default NavbarComponent;

const styles = StyleSheet.create({
  con: {
    paddingVertical: 10,
    width: 400,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    padding: 10,
  },
});
