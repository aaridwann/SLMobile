import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
const CardVendor = ({vendorName,img}) => {
  return (
    <View style={{width:230, height:350, backgroundColor:'#F0F0F0', borderRadius:20, overflow:'hidden', position:'relative', marginHorizontal:5}}>
        <Image style={{width:'100%', height:'100%', resizeMode:'cover'}} source={{uri:img}}/>
       
        <LinearGradient  colors={['transparent','#6B705C']}
        style={{ justifyContent:'center', alignItems:'center', position:'absolute',marginLeft:'auto', marginRight:'auto', bottom:0, height:80, textAlignVertical:'bottom', left:0, right:0, textAlign:'center'}}
        >
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}} >{vendorName}</Text>
        </LinearGradient>
    </View>
  )
}

export default CardVendor

const styles = StyleSheet.create({})