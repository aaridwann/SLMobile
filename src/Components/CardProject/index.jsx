import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'

const CardProjectComponent = ({title='Finished Project'}) => {
  return (
    <View style={{ width:'100%', paddingHorizontal:20, paddingVertical:10, backgroundColor:'#B7B7A4', justifyContent:'center', alignItems:'center'}}>
        <View style={{flexDirection:'row', width:'100%', borderBottomWidth:2, paddingBottom:5, borderColor:'white', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:20, width:'80%', paddingBottom:5, color:'white'}}>{title}</Text>
            <TouchableOpacity>
                <Ionicons name={"add-circle"} size={40} color={'white'} />
            </TouchableOpacity>
        </View>


{/* ==== Scroll === */}
        <View style={{width:'100%', borderRadius:20, overflow:'hidden', height:200, marginTop:10, justifyContent:'flex-end', alignItems:'flex-end'}}>
            <ScrollView centerContent={true} alwaysBounceHorizontal={true} horizontal={true} showsHorizontalScrollIndicator={false} style={{width:'100%'}}>
{/* === 1 === */}
                <View style={{width:400,marginRight:8, height:200}}>
                    <ImageBackground style={{ borderRadius:20, overflow:'hidden', width:"100%", height:'100%', resizeMode:'cover'}} source={{uri:'https://i.pinimg.com/564x/6a/e6/3c/6ae63c41cafcd651af9be4f94602e016.jpg'}}>
                        <LinearGradient colors={['transparent','white']} style={{ width:'100%', position:'absolute', bottom:0, paddingVertical:20, bottom:0, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{ fontSize:20, fontWeight:'bold', color:'#616161'}}>Engagement</Text>
                            <Text style={{ fontSize:15, fontWeight:'bold', color:'#616161'}}>Mila & Andia</Text>
                        </LinearGradient>
                    </ImageBackground>
                </View>

{/* === 2 === */}
                <View style={{width:400,marginRight:8, height:200}}>
                    <ImageBackground style={{ borderRadius:20, overflow:'hidden', width:"100%", height:'100%', resizeMode:'cover'}} source={{uri:'https://i.pinimg.com/564x/81/05/b9/8105b96102d2e80302a985598dd8cca7.jpg'}}>
                        <LinearGradient colors={['transparent','white']} style={{ width:'100%', position:'absolute', bottom:0, paddingVertical:20, bottom:0, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{ fontSize:20, fontWeight:'bold', color:'#616161'}}>Engagement</Text>
                            <Text style={{ fontSize:15, fontWeight:'bold', color:'#616161'}}>Mila & Andia</Text>
                        </LinearGradient>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
      



    </View>
  )
}

export default CardProjectComponent

const styles = StyleSheet.create({})