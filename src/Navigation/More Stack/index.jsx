import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddEventScreen from '../../Screens/Add Event'
import DirectMessageScreen from '../../Screens/Direct Message'
const Stack = createNativeStackNavigator()
function MoreStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,statusBarColor:'#6B705C',animation:'slide_from_right'}}>
        <Stack.Screen name="AddEvent" component={AddEventScreen} />
        <Stack.Screen name="DirectMessage" component={DirectMessageScreen} />
    </Stack.Navigator>
  )
}

export default MoreStack