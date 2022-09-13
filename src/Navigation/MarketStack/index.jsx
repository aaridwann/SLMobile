import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MarketScreen from '../../Screens/Market'
import ProfileVendorScreen from '../../Screens/Profile/ProfileVendor'
import DetailsPackageScreen from '../../Screens/DetailsPackage'

const Stack = createNativeStackNavigator()
export default function MarketStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown:false, statusBarColor:'#6B705C' }}>
        <Stack.Screen name="MarketScreen" component={MarketScreen} /> 
        <Stack.Screen name="ProfileVendor" component={ProfileVendorScreen} />
        <Stack.Screen name="DetailsPackage" component={DetailsPackageScreen} />
    </Stack.Navigator>
  )
}