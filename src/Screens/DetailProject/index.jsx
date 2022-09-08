import { ScrollView, StyleSheet, Text, View, useWindowDimensions, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';


const caption = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laboriosam ullam deserunt, mollitia excepturi, magnam error neque harum aliquid accusantium odio nulla voluptatem delectus, enim nam eveniet debitis! Sequi, quos.'

const DetailsProjectScreen = () => {
    const {height} = useWindowDimensions()
  return (
    <ScrollView style={{flex:1}} contentContainerStyle={{ alignItems:'center'}}>

        {/* ==== IMAGE ==== */}
        <View style={{ width:'100%', height:height*0.60, backgroundColor:'lightblue', overflow:'hidden', borderBottomRightRadius:70, borderBottomLeftRadius:70}}>
            <ImageBackground style={{ width:'100%', height:'100%', alignItems:'center', justifyContent:'flex-end'}} source={{uri:'https://i.pinimg.com/564x/ec/38/63/ec3863c3c2f40c6756b8bf5a75b977b9.jpg'}}>
                <LinearGradient colors={['transparent','black']} style={{ flexDirection:'row', alignItems:'flex-end', paddingBottom:20, width:'100%', height:'30%', justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Ionicons style={{marginHorizontal:20}} name={"heart-outline"} size={40} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons style={{marginHorizontal:20}} name={"chatbox-outline"} size={40} color={'white'} />
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
        </View>

        {/* ==== Title ==== */}
        <View style={{ alignSelf:'flex-start',marginTop:20, width:'80%', paddingVertical:10, borderTopRightRadius:100, paddingHorizontal:20, backgroundColor:'#B7B7A4'}}>
            <Text style={{ fontSize:20, color:'white', fontWeight:'500'}}>Wedding Rani & Arief</Text>
            <Text style={{ fontSize:10, color:'white', fontWeight:'500'}}>Serang, Indonesia</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={{ height:40,marginTop:15,}}>
                <Text style={{ fontSize:10, color:'white',fontWeight:'500'}}>{caption}</Text>
            </ScrollView>
        </View>  
        
        {/* ==== Vendor BY ====  */}
        <View style={{ marginTop:20, paddingVertical:20, paddingLeft:10, alignSelf:'flex-end', width:'80%', backgroundColor:'#B7B7A4', borderTopLeftRadius:50, borderBottomLeftRadius:50}}>
            <View style={{ flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:15, color:'white', fontWeight:'500'}}>Vendor by:</Text>

                <ScrollView showsHorizontalScrollIndicator={false} style={{marginLeft:10}} horizontal={true}>
                    
                    <TouchableOpacity style={{ borderRadius:4, marginHorizontal:8, paddingHorizontal:10, paddingVertical:5, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                        <Text >Photography</Text>
                        <Text style={{fontWeight:'500', fontStyle:'italic'}}>Grab-it Photography</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius:4, marginHorizontal:8, paddingHorizontal:10, paddingVertical:5, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                        <Text >Photography</Text>
                        <Text style={{fontWeight:'500', fontStyle:'italic'}}>Grab-it Photography</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius:4, marginHorizontal:8, paddingHorizontal:10, paddingVertical:5, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                        <Text >Photography</Text>
                        <Text style={{fontWeight:'500', fontStyle:'italic'}}>Grab-it Photography</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius:4, marginHorizontal:8, paddingHorizontal:10, paddingVertical:5, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                        <Text >Photography</Text>
                        <Text style={{fontWeight:'500', fontStyle:'italic'}}>Grab-it Photography</Text>
                    </TouchableOpacity>
                    
                </ScrollView>

            </View>
        </View>

        {/* ==== Comment ==== */}
        <View style={{width:'100%', borderTopLeftRadius:120, backgroundColor:'#B7B7A4', marginTop:20, alignItems:'center', paddingVertical:30}}>
            {/* Card */}
            <View style={{flexDirection:'row', width:'70%', justifyContent:'space-around', alignItems:'center'}}>
                <View style={{ width:'90%'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image style={{width:50, height:50, borderRadius:50, resizeMode:'cover'}} source={{uri:'https://i.pinimg.com/564x/51/b8/52/51b852b12e397a4ee5657d3e4b103330.jpg'}}/>
                        <Text style={{ fontWeight:'500', marginLeft:10}}>Username</Text>
                    </View>

                    <Text style={{marginTop:10,maxWidth:'80%', maxHeight:60}}>
                    {caption.slice(0,70)}... 
                    </Text>
                    <TouchableOpacity><Text style={{fontWeight:'700'}}>Load more</Text></TouchableOpacity>

                </View>

                <TouchableOpacity style={{backgroundColor:'white', paddingHorizontal:8, paddingVertical:4, justifyContent:'center', alignItems:'center'}}>
                    <Text>Comment</Text>
                </TouchableOpacity>
            </View>
        </View>

    </ScrollView>
  )
}

export default DetailsProjectScreen

const styles = StyleSheet.create({})