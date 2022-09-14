import { View, Text, Image, TouchableOpacity, FlatList,Dimensions, Pressable  } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment'
const data = [
'https://i.pinimg.com/564x/2d/2a/71/2d2a71c7d07097911a81405718c7ef73.jpg',
'https://i.pinimg.com/564x/13/9d/0a/139d0a6c026470d7a7de8fb0fdc84731.jpg',
'https://i.pinimg.com/564x/2d/2a/71/2d2a71c7d07097911a81405718c7ef73.jpg',
'https://i.pinimg.com/564x/13/9d/0a/139d0a6c026470d7a7de8fb0fdc84731.jpg',
'https://i.pinimg.com/736x/00/47/af/0047af4a9abf2abce74f7dc79c72b6df.jpg']
const grayText = '#858585'

export default function CardTimelineComponent({showModal, name,city,avatar,country,date,img}) {
  return (
    <View style={{width:'100%', alignItems:'center', marginBottom:10,paddingVertical:10}}>
        {/* === top === */}
        <View style={{flexDirection:'row', width:'100%', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20}}>
            
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity style={{ width:40,height:40,marginRight:15}}>
                    <Image style={{ borderRadius:50, height:'100%',width:'100%'}} source={{uri:avatar || 'https://i.pinimg.com/564x/50/41/48/504148b41e5cb14db4e111e3634cc5ca.jpg'}}/>
                </TouchableOpacity>
                <View style={{ justifyContent:'space-between'}}>
                  <Text style={{fontWeight:'900',color:'#4a4a4a'}}>{name  || 'Jared Terry'}</Text>
                  <Text style={{color:grayText}}>{city || 'Melbourn'}, {country || 'Australia'}</Text>
                </View>
            </View>
    
    
          <Text style={{color:grayText}}>{moment(date).startOf('hour').fromNow() || '10 mins ago'}</Text>
        </View>


        {/* === Center === */}
        <FlatList
            horizontal={true}
            data={img || data}
            snapToAlignment="center"
            // decelerationRate={"smooth"}
            // decelerationRate={'normal '}
            snapToInterval={Dimensions.get("window").width-500}
            showsHorizontalScrollIndicator={false}
            style={{ width:'100%',height:410,paddingVertical:10}}
            renderItem={(data) =>
                 <Pressable onLongPress={() => showModal(data.item)} style={{width:300, elevation:8, shadowColor:'black', borderRadius:40, overflow:'hidden', height:370, marginHorizontal:10}}>
                    <Image style={{width:'100%',height:'100%', resizeMode:'cover'}} source={{uri:data.item|| 'https://i.pinimg.com/564x/d7/fb/90/d7fb9077fb85af706f98a6a072fca541.jpg'}}/>
                </Pressable>}
        />
       

        {/* === Bottom === */}
        <View style={{flexDirection:'row',marginTop:-20, alignItems:'center', width:'98%', justifyContent:'space-between'}}>
            {/* === LEft === */}
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', width:50,height:50}}>
                    <Ionicons name={"heart-outline"} size={30} color={'red'} />
                </TouchableOpacity>
                <Text style={{fontWeight:'900', color:grayText}}>85</Text>
                <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', width:50,height:50}}>
                    <Ionicons name={"chatbox-ellipses-outline"} size={30} color={grayText} />
                </TouchableOpacity>
                <Text style={{fontWeight:'900', color:grayText}}>285</Text>
            </View>

            {/*  === Right === */}
                <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', width:50,height:50}}>
                    <Ionicons name={"ellipsis-horizontal"} size={30} color={grayText} />
                </TouchableOpacity>
        </View>
        
    </View>
  )
}