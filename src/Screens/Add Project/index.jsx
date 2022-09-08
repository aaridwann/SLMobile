import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddProjectScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={true} style={{flex:1}}>

    
    <View style={{ flex:1, paddingVertical:50 , alignItems:'center', backgroundColor:'#6B705C'}}>
        {/* === title === */}
        <Text style={{ fontWeight:'500', color:'white', fontSize:25}}>Add Project</Text>

        {/* ==== Form 1 ==== */}
        <View style={{ width:'100%', paddingHorizontal:20, marginTop:40}}>

            <View style={{ borderBottomWidth:1, borderColor:'white'}}>
                <Text style={{fontWeight:'500', color:'white'}}>Event Name</Text>
                <TextInput style={{color:'white', marginTop:-15, textAlign:'center'}}/>
            </View>
            <View style={{ marginTop:20, borderBottomWidth:1, borderColor:'white'}}>
                <Text style={{fontWeight:'500', color:'white'}}>Date Event</Text>
                <TextInput style={{color:'white', marginTop:-15, textAlign:'center'}}/>
            </View>
            <View style={{ marginTop:20, borderBottomWidth:1, borderColor:'white'}}>
                <Text style={{fontWeight:'500', color:'white'}}>Descriptions</Text>
                <TextInput style={{color:'white', marginTop:-15, textAlign:'center'}}/>
            </View>


        </View>

        {/* === Form 2 === */}
        <View style={{ width:'100%', paddingHorizontal:20, marginTop:40}}>
            <Text style={{fontWeight:'500', color:'white'}}>Vendor List</Text>

            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:20,alignItems:'center'}}>
                <Text style={{fontWeight:'500', color:'white'}}>Decoration Vendor :</Text>
                <TextInput  style={{ color:'white',width:'50%', borderBottomWidth:1, borderColor:'white'}} />
            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:20,alignItems:'center'}}>
                <Text style={{fontWeight:'500', color:'white'}}>Photography Vendor :</Text>
                <TextInput  style={{color:'white', width:'50%', borderBottomWidth:1, borderColor:'white'}} />
            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:20,alignItems:'center'}}>
                <Text style={{fontWeight:'500', color:'white'}}>Makeup Artist Vendor :</Text>
                <TextInput  style={{color:'white', width:'50%', borderBottomWidth:1, borderColor:'white'}} />
            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:20,alignItems:'center'}}>
                <Text style={{fontWeight:'500', color:'white'}}>Invitation Vendor :</Text>
                <TextInput  style={{color:'white', width:'50%', borderBottomWidth:1, borderColor:'white'}} />
            </View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', marginTop:20,alignItems:'center'}}>
                <Text style={{fontWeight:'500', color:'white'}}>Venue Vendor :</Text>
                <TextInput  style={{color:'white', width:'50%', borderBottomWidth:1, borderColor:'white'}} />
            </View>


        </View>

        {/* ==== Add Image ====*/}

        <TouchableOpacity style={{marginTop:40, justifyContent:'center', alignItems:'center', paddingHorizontal:10, backgroundColor:'white', paddingVertical:10, borderRadius:8}}>
        <Ionicons name={"images"} size={40} color={'#6B705C'} />
            <Text style={{fontSize:10, fontWeight:'500'}}>Choose Files</Text>
        </TouchableOpacity>
            <Text style={{marginTop:10, color:'white', fontWeight:'500', fontSize:20}}>Add Image or Video</Text>

    </View>
    
    </ScrollView>
  )
}

export default AddProjectScreen

const styles = StyleSheet.create({})