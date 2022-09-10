import { View, Text, ScrollView, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import VendorListDummy from '../../../dummy/VendorList';


const DetailProjectVendorScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'#6B705C',alignItems:'center', paddingTop:20, paddingHorizontal:20}}>
        {/* ==== Title ==== */}
        <View style={{ alignItems:'center', width:'90%'}}>
          <Text style={{ fontSize:25, color:'white', fontWeight:'600'}}>ENGAGEMENT</Text>
          <Text style={{ fontSize:20, marginTop:-5, color:'white', fontWeight:'600'}}>Rani & Arief</Text>
          <Text style={{ fontSize:15, marginTop:-5,  color:'white', fontWeight:'600'}}>24 Nov 2022</Text>
        </View>

        {/* === Line === */}
        <View style={{ flex:1, zIndex:1, position:'absolute', top:'10%', alignItems:'center', left:'5%'}}>
            <TouchableOpacity >
                <Ionicons name={"close-circle"} size={35} color={'white'} />
            </TouchableOpacity>
            <View style={{ width:3, height:(VendorListDummy.length+4)*100, backgroundColor:'white'}} />
        </View>

        {/* ==== Card ==== */}
        <FlatList
        showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}} style={{ flex:1, width:'100%'}}
        data={VendorListDummy}
        renderItem={(data) => <CardVendorList name={data.item.vendorName} category={data.item.vendorCategory} img={data.item.img} desc={data.item.desc}/> }
        keyExtractor={(data,i) => i}
        />
    </View>
  )
}

const CardVendorList = ({category,name,desc,img}) => {
    return(
        <View style={{ width:'100%', marginTop:40, height:280}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons style={{backgroundColor:'#6B705C'}} name={"radio-button-on"} size={30} color={'white'} />
            <Text style={{ marginLeft:10, fontSize:20, color:'white', fontWeight:'500'}}>{category}</Text>
        </View>

        <View style={{ paddingLeft:'12%', height:'80%'}}>
            <Text style={{fontSize:13, color:'white', marginBottom:10,}}>{desc}</Text>
            <TouchableOpacity style={{width:'100%', height:'90%', borderRadius:20 , overflow:'hidden'}}>
                <ImageBackground resizeMode='cover' style={{alignItems:'center', justifyContent:'flex-end', width:'100%', height:'100%'}} source={{uri:img}}>
                    <LinearGradient style={{ width:'100%', height:'50%', alignItems:'center', justifyContent:'flex-end', paddingVertical:20}} colors={['transparent','black']}>
                        <Text style={{color:'white', fontSize:20}}>{name}</Text>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>

        </View>
    )
}


export default DetailProjectVendorScreen