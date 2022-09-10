import {Animated, Pressable, useWindowDimensions, StyleSheet, Text,  TouchableOpacity, View, FlatList} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const dataEvent = ['wedding','prewedding','engagement','party']


const NavbarComponent = ({backgroundColor='lightblue',title,data=dataEvent,value}) => {
    const [show,setShow] = useState(false)
    const height = useRef(new Animated.Value(0)).current;

    function changeHandler () {
      setShow(!show)
      Animated.spring(height,{toValue:show ? 499 : 0, delay:100, useNativeDriver:false}).start()
    }

    const styles = StyleSheet.create({
      con: {
        paddingVertical: 10,
        width: '100%',
        backgroundColor: backgroundColor,
        justifyContent: 'flex-start',
        alignItems:'center',
        padding: 10,
        flexDirection:'row',
        // borderBottomWidth: backgroundColor == 'transparent' ? 1 : 0,
        // borderColor:'white'
      },
    });

    return (
    <>
    <View style={styles.con}>
      <TouchableOpacity onPress={changeHandler}>
        <Ionicons name={'menu-outline'} size={50} color={'white'} />
      </TouchableOpacity>
      {title && <Text style={{ fontSize:20, color:'white', fontWeight:'500', textAlign:'center', margin:'auto' }}>{title}</Text> }
    </View>

    
    <Animated.View style={{ left:height, display:`${show ? 'flex' : 'none'}`, justifyContent:'space-evenly', alignItems:'center', height:'auto', paddingBottom:20, width:'100%', backgroundColor:backgroundColor}}>

      <FlatList
        data={data}
        renderItem={(data,i) => (
          <TouchableOpacity onPress={() => [setShow(!show),value(data.item)]} style={{ justifyContent:'space-evenly', alignItems:'flex-start'}}>
            <Text style={{ color:'white',fontSize:20, marginTop:20}}>{data.item}</Text>
          </TouchableOpacity>
            )}
        keyExtractor={(data,i) => i}
      />

    </Animated.View>
    </>
  );
};

export default NavbarComponent;

