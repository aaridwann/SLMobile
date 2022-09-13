import { View, Text, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppAxios from '../../Utils/AppAxios'


const TimelineScreen = () => {
  // const {auth} = useContext(AuthContext)
  const [data,setData] = useState([])
  
  
  
  function refresh() {
   AppAxios(`/users`).then((data) => setData(data.data) )
  }

  console.log(data)
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{ fontSize:30,}}>TimelineScreen</Text>
      <FlatList
      data={data}
      renderItem={data => <Text>{data.item.name}</Text>}
      />
    <Button onPress={refresh} title='refresh token'/>
    </View>
  )
}

export default TimelineScreen