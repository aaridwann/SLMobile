import { View, Text } from 'react-native'
import React from 'react'
import { BarIndicator} from 'react-native-indicators'

const SplashScreen = () => {
  return (
    <View style={{ flex:1, justifyContent:'center', backgroundColor:'#6B705C', alignItems:'center'}}>
      <Text style={{ fontWeight:'500',color:'white', fontSize:50}}>Story Life</Text>
      <BarIndicator style={{position:'absolute', top:'55%'}} color='white' />
    </View>
  )
}

export default SplashScreen