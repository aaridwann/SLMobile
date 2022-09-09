import {StyleSheet, useWindowDimensions, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons  from 'react-native-vector-icons/Ionicons'


export default function NavbarComponent({backgroundColor, title}) {
    const {width} = useWindowDimensions()
  return (
    <View
      style={{
        backgroundColor: backgroundColor ,
        position: 'relative',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
      }}>
      <TouchableOpacity style={{alignSelf: 'flex-start', position:'absolute', left:4}}>
        <Ionicons name="arrow-back" size={40} color={backgroundColor == 'white' ? '#B7B7A4' : 'white'} />
      </TouchableOpacity>
      <Text
        style={{
        //   marginRight: width/2.5,
          fontWeight: '500',
          color: backgroundColor == 'white' ? '#B7B7A4' : 'white',
          fontSize: 20,
          textAlign:'center',
        //   backgroundColor:'lightblue',
        //   width:width/2,
        //   marginHorizontal:width/2
        }}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
