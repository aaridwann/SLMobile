import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SearchComponent from '../../Components/Search'
import NavbarComponent from '../../Components/NavMenu'
import CardPackageComponent from '../../Components/CardPackage'
const falseData = [1,2,3,4,5,6,6,7]
const PackageListScreen = () => {
  return (

    
    <View style={{ alignItems:'center',backgroundColor:'#6B705C',flex:1, paddingVertical:10}}>


        {/* ==== Title ==== */}
        <Text style={{fontSize:25, color:'white', fontWeight:'600'}}>Package List</Text>

        {/* ==== Search ==== */}
        <View style={{ width:'80%', marginTop:20}}>
            <SearchComponent submit={() => console.log('hellow')} value={(e) => console.log(e)} background='white'/>
        </View>

        {/* ==== Filter ==== */}
        <View style={{width:'90%', justifyContent:'center', borderBottomWidth:2, borderColor:'white', alignItems:'center', marginTop:10}}>
            <NavbarComponent value={(e) => console.log(e)} backgroundColor='transparent' title={'Filter by'}/>
        </View>

        {/* ==== Card ==== */}
        <FlatList 
        showsVerticalScrollIndicator={false} contentContainerStyle={{ minWidth:'100%', justifyContent:'center', alignItems:'center'}}
        data={falseData}
        renderItem={(data) => 
        <TouchableOpacity style={{marginVertical:10}}>
            <CardPackageComponent/>
        </TouchableOpacity> }
        keyExtractor={(data,i) => i}
        />


    </View>

  )
}

export default PackageListScreen

const styles = StyleSheet.create({})