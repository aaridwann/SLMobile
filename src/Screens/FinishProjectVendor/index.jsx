import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = ['wedding','prewedding','engagement','party']
const content = [
'https://i.pinimg.com/236x/5e/38/7f/5e387f4c9d0e4c09537cb9f0e6b00b7c.jpg',
'https://i.pinimg.com/236x/24/f3/b6/24f3b640113cdc23d7b0066a4c7e33b6.jpg',
'https://i.pinimg.com/236x/e2/91/34/e29134fcf415044f034e4013b9b09969.jpg',
'https://i.pinimg.com/236x/74/78/31/7478313d11c40758dde865c930cd39d0.jpg',
'https://i.pinimg.com/236x/fe/5e/f6/fe5ef6de4311410e367573a0303a8a86.jpg',
'https://i.pinimg.com/236x/5e/38/7f/5e387f4c9d0e4c09537cb9f0e6b00b7c.jpg',
'https://i.pinimg.com/236x/24/f3/b6/24f3b640113cdc23d7b0066a4c7e33b6.jpg',
'https://i.pinimg.com/236x/e2/91/34/e29134fcf415044f034e4013b9b09969.jpg',
'https://i.pinimg.com/236x/74/78/31/7478313d11c40758dde865c930cd39d0.jpg',
'https://i.pinimg.com/236x/fe/5e/f6/fe5ef6de4311410e367573a0303a8a86.jpg',
'https://i.pinimg.com/236x/5e/38/7f/5e387f4c9d0e4c09537cb9f0e6b00b7c.jpg',
'https://i.pinimg.com/236x/24/f3/b6/24f3b640113cdc23d7b0066a4c7e33b6.jpg',
'https://i.pinimg.com/236x/e2/91/34/e29134fcf415044f034e4013b9b09969.jpg',
'https://i.pinimg.com/236x/74/78/31/7478313d11c40758dde865c930cd39d0.jpg',
'https://i.pinimg.com/236x/fe/5e/f6/fe5ef6de4311410e367573a0303a8a86.jpg',
'https://i.pinimg.com/236x/5e/38/7f/5e387f4c9d0e4c09537cb9f0e6b00b7c.jpg',
'https://i.pinimg.com/236x/fe/5e/f6/fe5ef6de4311410e367573a0303a8a86.jpg',
'https://i.pinimg.com/236x/5e/38/7f/5e387f4c9d0e4c09537cb9f0e6b00b7c.jpg',
'https://i.pinimg.com/236x/24/f3/b6/24f3b640113cdc23d7b0066a4c7e33b6.jpg',
'https://i.pinimg.com/236x/e2/91/34/e29134fcf415044f034e4013b9b09969.jpg',
'https://i.pinimg.com/236x/74/78/31/7478313d11c40758dde865c930cd39d0.jpg',
'https://i.pinimg.com/236x/fe/5e/f6/fe5ef6de4311410e367573a0303a8a86.jpg',
'https://i.pinimg.com/236x/5e/38/7f/5e387f4c9d0e4c09537cb9f0e6b00b7c.jpg',
'https://i.pinimg.com/236x/24/f3/b6/24f3b640113cdc23d7b0066a4c7e33b6.jpg',
]

const FinishProjectVendorScreen = () => {
  return (
    <View style={{flex:1}}>

        {/* === Top back button === */}
        <View style={{paddingVertical:2, paddingHorizontal:8, backgroundColor:'#B7B7A4', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
            <TouchableOpacity style={{ }}>
            <Ionicons name={"arrow-back"} size={40} color={'white'} />
            </TouchableOpacity>
            <Text style={{ fontWeight:'bold', color:'white', marginLeft:'30%'}}>Finish Project</Text>
        </View>

        {/* === Search === */}
        <View style={{ flexDirection:'row', marginTop:2, paddingVertical:8, justifyContent:'center', alignItems:'center',width:'100%', backgroundColor:'#B7B7A4'}}>
            <View style={{ height:45, paddingHorizontal:8, borderRadius:8, borderColor:'white', borderWidth:1, justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
                <TouchableOpacity>
                    <Ionicons name={"search"} size={30} color={'white'} />
                </TouchableOpacity>
                <TextInput style={{borderRadius:10, width:'60%', color:'white', fontWeight:'600'}} placeholder='Searching...'/>
            </View>
        </View>

        {/* === Filter ===*/}
        <View style={{ borderBottomWidth:1, borderColor:'#B7B7A4', flexDirection:'row',paddingHorizontal:10, paddingVertical:12, alignItems:'center'}}>
            <Text style={{ fontWeight:'bold',  fontSize:18}}>Category</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginLeft:20}}
            horizontal={true}
            data={data}
            renderItem={(data) => <TouchableOpacity><Text style={{ fontWeight:'500', color:'white', borderRadius:8 ,paddingHorizontal:8, paddingVertical:4, marginHorizontal:5, backgroundColor:'#B7B7A4'}}>{data.item}</Text></TouchableOpacity>}
            />
        </View>

        {/* ==== Content ==== */}
        <ScrollView showsVerticalScrollIndicator={false} centerContent={true} bouncesZoom={true}>
            <View style={{flexWrap:'wrap', paddingBottom:50, flexDirection:'row', justifyContent:'center', overflow:'scroll'}}>
                {content.map((data, i) => (<TouchableOpacity key={i}><Image style={{ resizeMode:'cover', width:130, height:130,}} source={{uri:data}}/></TouchableOpacity>))}
            </View>
        </ScrollView>


    </View>
  )
}

export default FinishProjectVendorScreen

const styles = StyleSheet.create({})