import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BookingScreen from '../Screens/Booking';
import HomeScreen from '../Screens/Home/index';
import LoginScreen from '../Screens/Login';
import MarketScreen from '../Screens/Market';
import ProfileClientScreen from '../Screens/Profile/ProfileClient';
import ProfileVendorScreen from '../Screens/Profile/ProfileVendor';
import RegisterScreen from '../Screens/Register';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="ProfileVendor" component={ProfileVendorScreen} />
        <Stack.Screen options={{headerShown:false}} name="Booking" component={BookingScreen} />
        <Stack.Screen options={{headerShown:false}} name="Market" component={MarketScreen} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="ProfileClient" component={ProfileClientScreen} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
