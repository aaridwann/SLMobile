import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import MoreStack from '../Navigation/More Stack/';
import {AuthContext} from '../Context/AuthContext';
import AddEventScreen from '../Screens/Add Event';
import AddPackageScreen from '../Screens/Add Package';
import AddProjectScreen from '../Screens/Add Project';
import BookingScreen from '../Screens/Booking';
import DetailProjectVendorScreen from '../Screens/Detail Vendor';
import DetailsProjectScreen from '../Screens/DetailProject';
import DetailsPackageScreen from '../Screens/DetailsPackage';
import DirectMessageScreen from '../Screens/Direct Message';
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
import SettingScreen from '../Screens/Settings';
import SplashScreen from '../Screens/Splash Screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack';
import ProfileStack from './ProfileStack';
import MarketStack from './MarketStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TimelineScreen from '../Screens/Timeline';
import HomeStack from './HomeStack';
import NotificationScreen from '../Screens/Notification';
import NotificationStack from './NotificationStack';
import {LocationContext} from '../Context/LocationContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {stateAuth} = useContext(AuthContext);
  const {stateLocation} = useContext(LocationContext);
  console.log([stateLocation.state,stateAuth.state]);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Market') {
              iconName = focused ? 'search-circle' : 'search-circle-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6B705C',
          tabBarInactiveTintColor: 'gray',
          statusBarColor: '#6B705C',
          headerShown: false,
          // tabBarStyle:{display:'none'},
          // tabBarShowLabel:false
        })}>
        {stateAuth?.loading || !stateLocation.state ? (
          <Stack.Screen
            options={{headerShown: false, tabBarStyle: {display: 'none'}}}
            name="Splash"
            component={SplashScreen}
          />
        ) : !stateAuth?.state ? (
          <>
            <Tab.Screen
              options={{headerShown: false, tabBarStyle: {display: 'none'}}}
              name="Auth"
              component={AuthStack}
            />
          </>
        ) : (
          <>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Market" component={MarketStack} />
            <Tab.Screen
              name="NotificationStack"
              options={{tabBarBadge: 3}}
              component={NotificationStack}
            />
            <Tab.Screen name="Profile" component={ProfileStack} />
            <Tab.Screen
              name="MoreStack"
              options={{
                headerShown: false,
                tabBarStyle: {display: 'none'},
                tabBarItemStyle: {display: 'none'},
              }}
              component={MoreStack}
            />

            {/* <Tab.Screen options={{headerShown:false}} name="AddEvent" component={AddEventScreen} /> */}

            {/* === Other ===*/}
            {/* <Tab.Screen options={{headerShown:false}} name="ProfileClient" component={ProfileClientScreen} />
        <Tab.Screen options={{headerShown:false}} name="Setting" component={SettingScreen} />
        <Stack.Screen options={{headerShown:false, statusBarColor:'#6B705C', animation:'slide_from_right' }} name="DirectMessage" component={DirectMessageScreen} /> */}
            {/* <Stack.Screen options={{headerShown:false}} name="FinishProjectVendor" component={FinishProjectVendorScreen} /> */}
            {/* <Stack.Screen options={{headerShown:false, statusBarColor:'#6B705C'}} name="Market" component={MarketScreen} />  */}
            {/* <Stack.Screen options={{headerShown:false, statusBarHidden:true, animation:'slide_from_right' }} name="DetailProjectVendor" component={DetailProjectVendorScreen} /> */}
            {/* <Stack.Screen options={{headerShown:false}} name="DetailProject" component={DetailsProjectScreen} /> */}
            {/* <Stack.Screen options={{headerShown:false}} name="PackageList" component={PackageListScreen} /> */}

            {/* <Stack.Screen options={{headerShown:false}} name="AddPackage" component={AddPackageScreen} /> */}
            {/* <Stack.Screen options={{headerShown:false}} name="AddProject" component={AddProjectScreen} /> */}

            {/* <Stack.Screen options={{headerShown:false}} name="Booking" component={BookingScreen} /> */}
            {/* <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} /> */}
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
