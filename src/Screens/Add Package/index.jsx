import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddPackageScreen = () => {
  return (
    <ScrollView style={{flex:1, backgroundColor:'#6B705C'}}>
        <View style={{ flex:1, paddingVertical:20, alignItems:'center'}}>

            {/* ==== Title ==== */}
            <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>Add Package</Text>

            {/* === Choose Image === */}
            <View style={{ width:'90%',marginTop:20}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Choose Image</Text>
                <View style={{flexDirection:'row',marginTop:10, width:'100%', justifyContent:'space-between'}}>
                    <TouchableOpacity style={{ borderRadius:8, marginRight:10 ,width:80, height:80, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                        <Ionicons name={"add"} size={50} color={'#6B705C'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius:8, marginRight:10 ,width:80, height:80, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                        <Ionicons name={"add"} size={50} color={'#6B705C'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius:8, marginRight:10 ,width:80, height:80, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                        <Ionicons name={"add"} size={50} color={'#6B705C'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius:8, marginRight:10 ,width:80, height:80, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
                        <Ionicons name={"add"} size={50} color={'#6B705C'} />
                    </TouchableOpacity>
                </View>

            </View>

            {/* ==== Name Package === */}
            <View style={{width:'90%', marginTop:20}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Name Package</Text>
                <TextInput style={{ borderBottomWidth:1, borderColor:'white', color:'white', textAlign:'center', fontWeight:'500'}}/>
            </View>

            {/* ==== Price Package === */}
            <View style={{width:'90%', marginTop:20}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Price Package</Text>
                <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={{ fontSize:30, fontWeight:'bold', fontStyle:'italic' , color:'white'}}>IDR</Text>
                    <TextInput keyboardType='numeric' style={{ width:'80%', borderBottomWidth:1, borderColor:'white', color:'white', textAlign:'center', fontWeight:'500'}}/>
                </View>
            </View>

            {/* ==== Details Package ==== */}
            <View style={{width:'90%', marginTop:30}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Price Package</Text>
                <TextInput multiline={true} numberOfLines={10} style={{ padding:20,color:'white', fontWeight:'bold', marginTop:20, borderRadius:10, height:150, borderWidth:1, borderColor:'white', textAlignVertical: 'top',}}/>
            </View>

            {/* ==== Button ==== */}
            <TouchableOpacity style={{ paddingHorizontal:20, paddingVertical:10, borderRadius:10, backgroundColor:'white', marginTop:20}}>
                <Text style={{ fontSize:20, color:'#6B705C', fontWeight:'500'}}>Add Package</Text>
            </TouchableOpacity>

        </View>
    </ScrollView>
  )
}

export default AddPackageScreen

const styles = StyleSheet.create({})