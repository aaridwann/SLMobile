import {View, Text, StyleSheet} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {BarIndicator} from 'react-native-indicators';
import {LocationContext} from '../../Context/LocationContext';
import GetLocation from '../../Utils/GetLocation';
import AlertComponent from '../../Components/Alert';
import GetPermission, {typePermisson} from '../../Utils/GetPermission';

const SplashScreen = () => {
  const {stateLocation} = useContext(LocationContext);

  async function Location() {
    const permision = await GetPermission(typePermisson.camera);
    console.log(permision);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#6B705C',
        alignItems: 'center',
      }}>
      {/* {!stateLocation.state && <AlertComponent pressOk={Location} />} */}
      <Text style={{fontWeight: '500', color: 'white', fontSize: 50}}>
        Story Life
      </Text>
      <BarIndicator
        style={{position: 'absolute', top: '55%', backgroundColor: '#6B705C'}}
        color="white"
      />
    </View>
  );
};

export default SplashScreen;
