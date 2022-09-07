import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FilterBar = () => {
  return (
    <View style={{ flexDirection:'row', width:'100%', justifyContent:'space-around', alignItems:'center'}}>
        <Text style={{color:'white', fontSize:25}}>Filter</Text>


    <ScrollView style={{ maxWidth:200, flex:1 }} showsHorizontalScrollIndicator={false} horizontal={true} alwaysBounceHorizontal={true}>
      <Text style={{marginHorizontal:5, backgroundColor:'white', paddingHorizontal:8, paddingVertical:4, color:'black', borderRadius:8}}>FilterBar</Text>
      <Text style={{marginHorizontal:5, backgroundColor:'white', paddingHorizontal:8, paddingVertical:4, color:'black', borderRadius:8}}>FilterBar</Text>
      <Text style={{marginHorizontal:5, backgroundColor:'white', paddingHorizontal:8, paddingVertical:4, color:'black', borderRadius:8}}>FilterBar</Text>
      <Text style={{marginHorizontal:5, backgroundColor:'white', paddingHorizontal:8, paddingVertical:4, color:'black', borderRadius:8}}>FilterBar</Text>
      <Text style={{marginHorizontal:5, backgroundColor:'white', paddingHorizontal:8, paddingVertical:4, color:'black', borderRadius:8}}>FilterBar</Text>
      <Text style={{marginHorizontal:5, backgroundColor:'white', paddingHorizontal:8, paddingVertical:4, color:'black', borderRadius:8}}>FilterBar</Text>
    </ScrollView>


    </View>
  )
}

export default FilterBar

const styles = StyleSheet.create({})