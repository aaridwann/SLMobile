import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FilterBar = ({data,value,colorText='white'}) => {
  return (
    <View style={{ flexDirection:'row', width:'100%', justifyContent:'space-around', alignItems:'center', paddingLeft:10}}>
        <Text style={{color:'white', fontSize:25}}>Filter</Text>


    <FlatList
      style={{ maxWidth:300, flex:1, marginLeft:20 }} 
      showsHorizontalScrollIndicator={false} 
      horizontal={true} 
      alwaysBounceHorizontal={true}
      data={data}
      renderItem={(data) => 
      <TouchableOpacity onPress={() => value(data.item)}>
        <Text style={{marginHorizontal:5, backgroundColor:'white', paddingHorizontal:8, paddingVertical:4, color:colorText, borderRadius:8}}>{data.item}</Text>
      </TouchableOpacity>
    }
      keyExtractor={(data,i) => i}
    />
  

    </View>
  )
}

export default FilterBar

const styles = StyleSheet.create({})