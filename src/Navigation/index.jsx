import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddPackageScreen from '../Screens/Add Package';
import AddProjectScreen from '../Screens/Add Project';
import BookingScreen from '../Screens/Booking';
import DetailsPackageScreen from '../Screens/DetailsPackage';
import FinishProjectVendorScreen from '../Screens/FinishProjectVendor';
import FollowerScreen from '../Screens/Follower';
import FollowingScreen from '../Screens/Following';
import HomeScreen from '../Screens/Home/index';
import LoginScreen from '../Screens/Login';
import MarketScreen from '../Screens/Market';
import PackageListScreen from '../Screens/PackageList';
import ProfileClientScreen from '../Screens/Profile/ProfileClient';
import ProfileVendorScreen from '../Screens/Profile/ProfileVendor';
import RegisterScreen from '../Screens/Register';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="PackageList" component={PackageListScreen} />
        <Stack.Screen options={{headerShown:false}} name="DetailsPackage" component={DetailsPackageScreen} />
        <Stack.Screen options={{headerShown:false}} name="AddPackage" component={AddPackageScreen} />
        <Stack.Screen options={{headerShown:false}} name="AddProject" component={AddProjectScreen} />
        <Stack.Screen options={{headerShown:false}} name="FinishProjectVendor" component={FinishProjectVendorScreen} />
        <Stack.Screen options={{headerShown:false}} name="Follower" component={FollowerScreen} />
        <Stack.Screen options={{headerShown:false}} name="Following" component={FollowingScreen} />
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
