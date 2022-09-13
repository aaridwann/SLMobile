import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileClientScreen from '../../Screens/Profile/ProfileClient'
import SettingScreen from '../../Screens/Settings'
import DirectMessageScreen from '../../Screens/Direct Message'
import FollowerScreen from '../../Screens/Follower'
import FollowingScreen from '../../Screens/Following'
const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,statusBarColor:'#6B705C',animation:'slide_from_right'}}>
        <Stack.Screen name="ProfileClient" component={ProfileClientScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen  options={{tabBarStyle:{display:'none'}}} name="DirectMessage" component={DirectMessageScreen} />
        <Stack.Screen options={{headerShown:false}} name="Follower" component={FollowerScreen} />
        <Stack.Screen options={{headerShown:false}} name="Following" component={FollowingScreen} />
    </Stack.Navigator>
  )
}

export default ProfileStack