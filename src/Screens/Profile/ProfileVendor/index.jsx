import { useWindowDimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CardProjectComponent from '../../../Components/CardProject'

const ProfileVendorScreen = () => {
    const {height,width} = useWindowDimensions()
  return (
    <View style={{ flex:1, alignItems:'center'}}>
    
    {/* ==== Top ==== */}
        <View style={{width:'100%', height:height/2.9}}>
                <ImageBackground style={{ width:400, height:'100%'}} resizeMode='cover' source={{uri:'https://i.pinimg.com/564x/57/ba/36/57ba36161ea1fe9d1a33140883fc06b3.jpg'}}>
            {/* === 1 === */}
            <View style={{ flexDirection:'row', width:'100%', justifyContent:'space-around', alignItems:'center', marginTop:20}}>
                <Image style={{ width: 120,height: 120,borderRadius: 150 / 2,overflow: 'hidden',  borderRadius: 150 / 2,}} source={{uri:'https://i.pinimg.com/564x/16/50/75/16507562f619f4da91604bb0ceb7fccd.jpg'}}/>
                <View >
                    <TouchableOpacity style={{ margin:5, justifyContent:'center', paddingVertical:4, alignItems:'center', borderRadius:10, width:80, backgroundColor:'white'}}>
                        <Text>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:5, justifyContent:'center',  paddingVertical:4, alignItems:'center', borderRadius:10, width:80, backgroundColor:'white'}}>
                        <Text>Message</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* === 2 === */}
            <LinearGradient colors={['transparent','black']} style={{width:'100%', flexDirection:'row', bottom:0, paddingVertical:32, justifyContent:'space-around', alignItems:'center'}}>
                <View>
                    <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Grab-it Photography</Text>
                    <Text style={{fontSize:14, color:'white', fontWeight:'300'}}>Capture with love</Text>
                </View>
                <View>
                    <Text style={{fontSize:14, color:'white', fontWeight:'bold'}}>Jakarta, Indonesia</Text>
                    <Text style={{fontSize:14, color:'white', fontWeight:'bold'}}>Good Attitude</Text>
                </View>
            </LinearGradient>
                </ImageBackground>
        </View>

    {/* === Followers === */}
        <View style={{flexDirection:'row', width:width, marginTop:8, backgroundColor:'#B7B7A4', paddingVertical:15, justifyContent:'space-around'}}>
            <TouchableOpacity style={{ borderRadius:10, alignItems:'center',paddingVertical:5, width:100, backgroundColor:'#B7B7A4'}}>
                <Text style={{color:'white'}}>522</Text>
                <Text style={{color:'white'}}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:10, alignItems:'center',paddingVertical:5, width:100, backgroundColor:'#B7B7A4'}}>
                <Text style={{color:'white'}}>522</Text>
                <Text style={{color:'white'}}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:10, alignItems:'center',paddingVertical:5, width:100, backgroundColor:'#B7B7A4'}}>
                <Text style={{color:'white'}}>522</Text>
                <Text style={{color:'white'}}>Followers</Text>
            </TouchableOpacity>
        </View>

        <ScrollView alwaysBounceVertical={true} centerContent={true} style={{ marginTop:5, width:'100%'}}>
            
    {/* === Category ==== */}
        <View style={{width:'100%', backgroundColor:'#B7B7A4', paddingBottom:8 }}>
            <Text style={{marginLeft:20, fontSize:19}}>Service Available</Text>
            <View style={{ flexDirection:'row', marginTop:5, justifyContent:'flex-start', alignItems:'center', paddingHorizontal:10, flexWrap:'wrap', width:'100%'}}>
                <TouchableOpacity style={{ paddingHorizontal:8, margin:5, paddingVertical:4, backgroundColor:'rgba(255, 255, 255, 0.5)' ,color:'white', borderRadius:10}}>
                    <Text style={{ color:'#a2a384'}}>Wedding</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal:8, margin:5, paddingVertical:4, backgroundColor:'rgba(255, 255, 255, 0.5)' ,color:'white', borderRadius:10}}>
                    <Text style={{ color:'#a2a384'}}>Wedding</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal:8, margin:5, paddingVertical:4, backgroundColor:'rgba(255, 255, 255, 0.5)' ,color:'white', borderRadius:10}}>
                    <Text style={{ color:'#a2a384'}}>Wedding</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal:8, margin:5, paddingVertical:4, backgroundColor:'rgba(255, 255, 255, 0.5)' ,color:'white', borderRadius:10}}>
                    <Text style={{ color:'#a2a384'}}>Wedding</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal:8, margin:5, paddingVertical:4, backgroundColor:'rgba(255, 255, 255, 0.5)' ,color:'white', borderRadius:10}}>
                    <Text style={{ color:'#a2a384'}}>Wedding</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal:8, margin:5, paddingVertical:4, backgroundColor:'rgba(255, 255, 255, 0.5)' ,color:'white', borderRadius:10}}>
                    <Text style={{ color:'#a2a384'}}>Wedding</Text>
                </TouchableOpacity>
            </View>
        </View>

    {/* ==== List ==== */}

    
        <CardProjectComponent/>
        <CardProjectComponent/>
        <CardProjectComponent/>
        <CardProjectComponent/>
        <CardProjectComponent/>
    </ScrollView>

    </View>
  )
}

export default ProfileVendorScreen

const styles = StyleSheet.create({})