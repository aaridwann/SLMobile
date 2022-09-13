import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../Screens/Login'
import RegisterScreen from '../../Screens/Register'

const Stack = createNativeStackNavigator()
const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false, statusBarColor:'#6B705C'}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false,animation:'slide_from_right'}} name="Register" component={RegisterScreen} />
    </Stack.Navigator>
    )
}

export default AuthStack