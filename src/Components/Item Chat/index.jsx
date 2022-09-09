import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'

const chat = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa praesentium est fugiat quaerat, ad dolorum iste esse earum sunt debitis iure ducimus perferendis ipsam? Deserunt quae eveniet magnam rem placeat.'

const ChatComponents = ({id, message, date}) => {
  return (
    <View style={{flexDirection:id == 'user' ? 'row-reverse' : 'row', marginVertical:20, width:'100%', paddingHorizontal:20, alignItems:'center',}}>
            <Image style={{width:50, height:50, borderRadius:50}} source={{uri:"https://i.pinimg.com/564x/e6/38/fd/e638fdd53d71f3e1201c0ca48289c658.jpg"}}/>

        <View style={{ justifyContent:'center', alignItems:'center', maxWidth:'60%', marginHorizontal:10}}>
          <Text style={{ alignSelf:id !== 'user' ? 'flex-start' : 'flex-end', fontSize:15, fontWeight:'bold'}}>{id}</Text>
          <TouchableOpacity><Text style={{ color:'white', borderRadius:10, maxWidth:'100%', backgroundColor:'#B7B7A4', padding:10}}>{message}</Text></TouchableOpacity>
          <Text style={{ alignSelf:id !== 'user' ? 'flex-start' : 'flex-end', fontSize:10, fontWeight:'bold'}}>{moment(date).startOf('hour').fromNow()}</Text>
        </View>
        
    </View>
  )
}

export default ChatComponents