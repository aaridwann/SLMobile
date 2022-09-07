import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ justifyContent:'center', alignItems:'center', flex:1, margin:'auto'}}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
