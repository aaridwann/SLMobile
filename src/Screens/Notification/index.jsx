import { StyleSheet, Text, View ,Image, FlatList} from 'react-native'
import React, { useState } from 'react'
import moment from 'moment'
import colors from '../../Constants/Colors'
import dummiNotif from '../../../dummy/notifData'

export default function NotificationScreen() {
  const [refresh,setRefresh] = useState(false)
  const [data,setData] = useState(dummiNotif)

  function handleRefresh (e){
    // alert('hola')
    setData(data => [...data,dummiNotif[0]])
  }


  return (
    <View style={{justifyContent:'center', width:'100%', alignItems:'center',flex:1}}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{width:'100%' }}
        refreshing={refresh}
        onRefresh={handleRefresh}
        data={data}
        renderItem={({item}) => <NotifItems img={item.img} name={item.name} desc={item.desc} date={item.date}/>}
        keyExtractor={(data,i) => i}
      />
      
    </View>
  )
}

function NotifItems ({name,img,desc,date}){
  return(
        <View style={{width:'100%', flexDirection:'row', paddingHorizontal:4, borderBottomWidth:1, borderColor:colors.light, paddingVertical:6, justifyContent:'space-between', alignItems:'center'}}>
          <Image source={{uri:img||'https://i.pinimg.com/564x/b6/f8/bb/b6f8bbd2462becd55f99b34013cda23e.jpg'}} style={{ borderRadius:50, width:50,height:50, resizeMode:'cover', marginRight:10}}/> 
          <View style={{flexDirection:'row',width:200}}>
            <Text style={{ color:colors.text, fontWeight:'bold'}} >{name} {' '}</Text>
            <Text style={{ color:colors.text}} >{desc}</Text>
          </View>
          <Text style={{color:colors.text,}}>{moment(date||new Date()).startOf('hour').fromNow()}</Text> 
        </View>
    )
}