import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import NavbarComponent from '../../Components/Navbar'
import ChatComponents from '../../Components/Item Chat'
import dummyChat from '../../../dummy/chat'
import ChatService from '../../Utils/ChatService'
import { FlashList } from '@shopify/flash-list'

const DirectMessageScreen = ({navigation}) => {
    const [message, setMessage] = useState('')
    const [dataChat,setDataChat] = useState(dummyChat)

    function send() {
        if(message !== '' || message.trim().length !== 0) {
            ChatService().emit('message',{id:'user',message:message,date:new Date()})
        }
        setMessage('')
    }

    function IncomeMessage () {
        ChatService().on('message',(data) => setDataChat(oldData => [...oldData, data]))
    }
    
    useEffect(() => {
        IncomeMessage()
    },[])



  return (
    
    <View style={{ alignItems:'center',flex:1}}>
        <NavbarComponent navigation={navigation} backgroundColor={'#B7B7A4'} title={'Direct Message'}/>
        <View style={{width:'100%', height:'100%', paddingBottom:'10%', justifyContent:'center',}}>
           
        {/*==== Message ====  */}
        <View style={{ height:'85%', width: '100%' }}>

            <FlashList
                estimatedItemSize={300}
                // inverted={true}
                bounces={true}
                showsVerticalScrollIndicator={false}
                centerContent={true}
                // data={[...dataChat].reverse()}
                data={dataChat}
                renderItem={({item}) =>  <ChatComponents id={item.id} message={item.message} date={item.date} />}
                keyExtractor={(data,i) => i}
            />
                </View>

        {/* === Keyboard ==== */}
            <View style={{ width:'100%', height:100, backgroundColor:'#B7B7A4', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                <TextInput value={message} onSubmitEditing={send} onChangeText={(e) => setMessage(e)} placeholderTextColor={'#B7B7A4'} style={{ color:'#B7B7A4',borderRadius:20, textAlign:'center', width:'70%', backgroundColor:'white'}} placeholder='type here'/>
                <TouchableOpacity onPress={send} style={{ backgroundColor:'white', paddingHorizontal:15, paddingVertical:8, borderRadius:5}}>
                    <Text style={{ fontWeight:'bold', color:'#B7B7A4'}}>Send</Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

export default DirectMessageScreen

const styles = StyleSheet.create({})