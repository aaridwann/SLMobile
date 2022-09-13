import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient'

const CardProjectComponent = ({title='Finished Project',data}) => {

  return (
    <View style={{ width:'100%', paddingHorizontal:20, paddingVertical:10, backgroundColor:'#B7B7A4', justifyContent:'center', alignItems:'center'}}>

        {/* ==== Title and button add ====*/}
        <View style={{flexDirection:'row', width:'100%', borderBottomWidth:2, paddingBottom:5, borderColor:'white', justifyContent:'space-between', alignItems:'center'}}>
            <TouchableOpacity style={{width:'80%'}}>
                <Text style={{fontSize:20, paddingBottom:5, color:'white'}}>{title}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Ionicons name={"add-circle"} size={40} color={'white'} />
            </TouchableOpacity>
        </View>


        {/* ==== Scroll ==== */}
        <View style={{width:'100%', borderRadius:20, overflow:'hidden', height:200, marginTop:10, justifyContent:'flex-end', alignItems:'flex-end'}}>
            <FlatList
                centerContent={true} alwaysBounceHorizontal={true} horizontal={true} showsHorizontalScrollIndicator={false} style={{width:'100%'}}
                data={data}
                renderItem={data => (
                <View style={{width:350,marginRight:8, height:200}}>
                    <ImageBackground style={{ borderRadius:20, overflow:'hidden', width:"100%", height:'100%', resizeMode:'cover'}} source={{uri:data.item.img}}>
                        <LinearGradient colors={['transparent','black']} style={{ width:'100%', position:'absolute', bottom:0, paddingVertical:20, bottom:0, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{ fontSize:20, fontWeight:'bold', color:'white'}}>{title}</Text>
                            <Text style={{ fontSize:15, fontWeight:'bold', color:'white'}}>{data.item.name}</Text>
                        </LinearGradient>
                    </ImageBackground>
                </View>
                )}
            />
        </View>

    </View>
  )
}

export default CardProjectComponent

const styles = StyleSheet.create({})