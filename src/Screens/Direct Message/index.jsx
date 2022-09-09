import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavbarComponent from '../../Components/Navbar'
import ChatComponents from '../../Components/Item Chat'
import dummyChat from '../../../dummy/chat'

const DirectMessageScreen = () => {
    const [message, setMessage] = useState('')

  return (
    
    <ScrollView contentContainerStyle={{flex:1, alignItems:'center'}}>
        <NavbarComponent backgroundColor={'#B7B7A4'} title={'Direct Message'}/>
        <View style={{width:'100%', paddingBottom:'25%', justifyContent:'center',}}>
           
        {/*==== Message ====  */}
            <FlatList
                bounces={true}
                showsVerticalScrollIndicator={false}
                centerContent={true}
                data={dummyChat}
                renderItem={(data) => <ChatComponents id={data.item.id} message={data.item.message} date={data.item.date} />}
                keyExtractor={(data,i) => i}
            />

        {/* === Keyboard ==== */}
            <View style={{ width:'100%', height:100, backgroundColor:'#B7B7A4', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                <TextInput value={message} onSubmitEditing={() => console.log(message)} onChangeText={(e) => setMessage(e)} placeholderTextColor={'#B7B7A4'} style={{ borderRadius:20, textAlign:'center', width:'70%', backgroundColor:'white'}} placeholder='type here'/>
                <TouchableOpacity onPress={() => console.log(message)} style={{ backgroundColor:'white', paddingHorizontal:15, paddingVertical:8, borderRadius:5}}>
                    <Text style={{ fontWeight:'bold', color:'#B7B7A4'}}>Send</Text>
                </TouchableOpacity>
            </View>

        </View>
    </ScrollView>
  )
}

export default DirectMessageScreen

const styles = StyleSheet.create({})