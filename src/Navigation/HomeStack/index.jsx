import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TimelineScreen from '../../Screens/Timeline'


const Stack = createNativeStackNavigator()


export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown:false, statusBarColor:'#6B705C' }}>
        <Stack.Screen options={{ headerShown:false, statusBarColor:'#6B705C' }} name='Timeline' component={TimelineScreen}/>
    </Stack.Navigator>

    )
}