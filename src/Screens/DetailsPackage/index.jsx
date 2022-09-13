import { ScrollView, StyleSheet, Text, View, useWindowDimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea in obcaecati dolorem laborum tempora quis cum ratione rerum nostrum consectetur et, maiores incidunt nam, deleniti eius, blanditiis asperiores! Iusto, provident! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis hic officia vero minima voluptatem asperiores similique consequuntur eaque velit rerum alias, nihil quia beatae id exercitationem sunt eos. Inventore, maiores!'




const DetailsPackageScreen = () => {
    const {height} = useWindowDimensions()
  return (
    <ScrollView style={{flex:1,backgroundColor:'#6B705C'}}>
        <View style={{ justifyContent:'center',alignItems:'center'}}>
        {/* ==== TOP ==== */}
        <View style={{width:'100%', height:height*0.58 ,backgroundColor:'lightblue'}}>
            <ImageBackground style={{ width:'100%', height:'100%' ,justifyContent:'space-between', alignItems:'center'}} source={{uri:'https://i.pinimg.com/564x/41/ec/53/41ec53911b2960cc385c2b230dcc09c5.jpg'}}>
                {/* ==== Back and Love === */}
                <View style={{ width:'100%', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20, marginTop:10}}>
                    <TouchableOpacity>
                        <Ionicons name={"arrow-back"} size={40} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name={"heart"} size={40} color={'white'} />
                    </TouchableOpacity>
                </View>

                {/*  ==== Title and Price ==== */}
                <LinearGradient colors={['transparent','black']} style={{width:'100%', height:height*0.5, paddingBottom:20, justifyContent:'flex-end', alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:25, fontStyle:'italic', fontWeight:'700'}}>Minimalist Package</Text>
                    <Text style={{color:'white', fontSize:25, fontStyle:'italic', fontWeight:'700'}}>Rp.4.500.000</Text>
                </LinearGradient>


            </ImageBackground>
        </View>


        {/* ==== BOTTOM ==== */}
        <View style={{ width:'90%', marginTop:20, borderBottomWidth:1, borderColor:'white', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20, paddingHorizontal:20, paddingVertical:5, borderRadius:5, backgroundColor:'rgba(255, 255, 255, 0.57)', color:'white', fontWeight:'500'}}>Description</Text>
            <View style={{width:'100%', height:height*0.22, padding:10, borderBottomWidth:1, borderColor:'white', justifyContent:'center', alignItems:'center'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ textAlign:'justify', color:'white'}}>{desc}</Text>
                </ScrollView>
            </View>
        </View>

        {/* ==== Button Booking ==== */}

        <TouchableOpacity style={{ paddingHorizontal:20, borderRadius:5, paddingVertical:5, marginTop:20, backgroundColor:'white'}}>
            <Text style={{ color:'#6B705C', fontSize:23, fontWeight:'500'}}>Book Now</Text>
        </TouchableOpacity>


        </View>
    </ScrollView>
  )
}

export default DetailsPackageScreen

const styles = StyleSheet.create({})