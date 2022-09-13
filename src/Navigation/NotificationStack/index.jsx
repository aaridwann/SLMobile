import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotificationScreen from '../../Screens/Notification'

const Stack = createNativeStackNavigator()


const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false, statusBarColor:'#6B705C' }} >
        <Stack.Screen name='Notification' component={NotificationScreen}/>
    </Stack.Navigator>
  )
}

export default NotificationStack