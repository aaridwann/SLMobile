import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchComponent = ({background='transparent',value,submit}) => {
  return (
    <View
      style={{
        height: 45,
        width:'100%',
        paddingHorizontal: 8,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:background
      }}>
      <TouchableOpacity onPress={submit}>
        <Ionicons name={'search'} size={30} color={background == 'white' ? '#6B705C' :'white'} />
      </TouchableOpacity>
      <TextInput
          onChangeText={(e) => value(e)}
          style={{
          borderRadius: 10,
          width: '60%',
          color: background == 'white' ? '#6B705C' :'white',
          fontWeight: '600',
        }}
        placeholder="Searching..."
      />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({});
