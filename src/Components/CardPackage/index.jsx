import { useWindowDimensions, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const CardPackageComponent = ({img,title,price}) => {
    const {width,height} = useWindowDimensions()
  return (
    <View style={{ width:width*0.8, height:height*0.4,borderRadius:10, overflow:'hidden', backgroundColor:'white'}}>
        <ImageBackground style={{width:'100%', borderRadius:10, height:'100%', alignItems:'center', justifyContent:'flex-end'}} source={{uri:'https://i.pinimg.com/564x/47/53/2b/47532b175dc8fbb9ac3d780b8e6c6d22.jpg'}}>
 
        <LinearGradient colors={['transparent','black']} style={{width:'100%', height:height*0.2, paddingBottom:20, justifyContent:'flex-end', alignItems:'center'}}>
            <Text style={{color:'white', fontSize:25, fontStyle:'italic', fontWeight:'700'}}>Minimalist Package</Text>
            <Text style={{color:'white', fontSize:25, fontStyle:'italic', fontWeight:'700'}}>Rp.4.500.000</Text>
        </LinearGradient>
 
        </ImageBackground>
    </View>
  )
}

export default CardPackageComponent

const styles = StyleSheet.create({})