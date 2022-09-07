import { StyleSheet, View} from 'react-native';
import React from 'react';
import TopScreen from './top';
import LinearGradient from 'react-native-linear-gradient';
import CardForm from './Card';
const LoginScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#FFFFFF', '#6B705C']} style={styles.con}>
      <View style={{height: 220, width: '100%'}}>
        <TopScreen />
      </View>
      <View
        style={{
          height: 200,
         
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CardForm navigation={navigation} />
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
