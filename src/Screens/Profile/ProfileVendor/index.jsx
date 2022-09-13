import { useWindowDimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CardProjectComponent from '../../../Components/CardProject'
import dataProjectFinish from '../../../../dummy/DataProjectFinish'
const category = ['wedding','prewedding','engagement','all']

const ProfileVendorScreen = ({route}) => {
    const data = route.params
    const {height,width} = useWindowDimensions()
    const [filterCategory,setFilterCategory] = useState('all')
    const [dataFilter,setDataFilter] = useState([])

    function filter () {
        setDataFilter(filterCategory == 'all' ? [] : dataProjectFinish.filter((data) => data.category == filterCategory))
    }

    useEffect(() => {
        filter()
    },[filterCategory])

    console.log(data);
  return (
    <View style={{ flex:1, alignItems:'center'}}>
    
    {/* ==== Top ==== */}
        <View style={{width:'100%', height:height/2.9}}>
                <ImageBackground style={{ justifyContent:'space-between', width:'100%', height:'100%'}} resizeMode='cover' source={{uri:'https://i.pinimg.com/564x/57/ba/36/57ba36161ea1fe9d1a33140883fc06b3.jpg'}}>
            {/* === 1 === */}
            <View style={{ flexDirection:'row', width:'100%', justifyContent:'space-around', alignItems:'center', marginTop:20}}>
                <Image style={{ width: 120,height: 120,borderRadius: 150 / 2,overflow: 'hidden',  borderRadius: 150 / 2,}} source={{uri:'https://i.pinimg.com/564x/16/50/75/16507562f619f4da91604bb0ceb7fccd.jpg'}}/>
                <View >
                    <TouchableOpacity style={{ margin:5, justifyContent:'center', paddingVertical:4, alignItems:'center', borderRadius:10, width:80, backgroundColor:'white'}}>
                        <Text style={{color:'#B7B7A4', fontWeight:'500'}}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:5, justifyContent:'center',  paddingVertical:4, alignItems:'center', borderRadius:10, width:80, backgroundColor:'white'}}>
                        <Text style={{color:'#B7B7A4', fontWeight:'500'}}>Message</Text>
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
    
    <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false} alwaysBounceVertical={true} centerContent={true} style={{ flex:1, width:'100%'}}> 

    {/* === Followers === */}
        <View style={{flexDirection:'row', width:width, marginTop:4, backgroundColor:'#B7B7A4', paddingVertical:15, justifyContent:'space-around'}}>
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

        
            
    {/* === Category ==== */}
        <View style={{width:'100%',paddingTop:10, marginTop:4, backgroundColor:'#B7B7A4', paddingBottom:8 }}>
            <Text style={{marginLeft:20, fontSize:19, color:'white'}}>Service Available</Text>
            <View style={{ flexDirection:'row', marginTop:5, justifyContent:'flex-start', alignItems:'center', paddingHorizontal:10, flexWrap:'wrap', width:'100%'}}>
                {category.map((data,i) => (
                    <TouchableOpacity key={i} onPress={() => setFilterCategory(data)} style={{ paddingHorizontal:8, margin:5, paddingVertical:4, backgroundColor:filterCategory == data ? '#a2a384' : 'rgba(255, 255, 255, 0.5)' ,color:'white', borderRadius:10}}>
                        <Text style={{ color:filterCategory == data ? 'white': '#a2a384'}}>{data}</Text>
                    </TouchableOpacity>
                    ))}
            </View>
        </View>
    

    {/* ==== List ==== */}
        <FlatList
            alwaysBounceVertical={true} centerContent={true} style={{ width:'100%'}}
            contentContainerStyle={{marginTop:4}}
            data={dataFilter.length !== 0 ? dataFilter : dataProjectFinish}
            renderItem={data => { 
            return <CardProjectComponent title={data.item.category} data={data.item.data}/>
            }}
            keyExtractor={(data,i) => i}
        />
       
       </ScrollView>

    </View>
  )
}

export default ProfileVendorScreen

const styles = StyleSheet.create({})