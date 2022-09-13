import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BarIndicator} from 'react-native-indicators'
import Spinner from 'react-native-loading-spinner-overlay';

const SplashScreen = () => {
  return (
    <View style={{ flex:1, justifyContent:'center', backgroundColor:'#6B705C', alignItems:'center'}}>
      <Text style={{ fontWeight:'500',color:'white', fontSize:50}}>Story Life</Text>
      <BarIndicator style={{position:'absolute', top:'55%', backgroundColor:'#6B705C'}}  color='white' />
      {/* <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default SplashScreen