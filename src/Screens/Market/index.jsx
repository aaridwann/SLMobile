import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavbarComponent from '../../Components/NavMenu'
import FilterBar from '../../Components/Filter'
import CardVendor from '../../Components/CardVendor'
import dummyVendorMarket from '../../../dummy/VendorMarket'

const dataEvent = ['wedding','prewedding','engagement','party']


const MarketScreen = ({navigation}) => {
    const [dataSearch,setDataSearch] = useState([])

    function filterSearch(e) {
        const reg = new RegExp(e,'ig')
            setDataSearch(dummyVendorMarket.filter((data) => reg.test(data.vendorName)))
    }
    

  return (
        <ScrollView stickyHeaderIndices={[1]} horizontal={false} style={{flex:1}} showsVerticalScrollIndicator={false} contentContainerStyle={styles.con}>

    {/* === Navbar === */}
            <NavbarComponent value={(data) => console.log(data)} backgroundColor='#6B705C' data={dataEvent}  />

    {/* === Input Search === */}
            <View style={{ backgroundColor:'#F5F5F5' , paddingBottom:20, borderBottomWidth:1.5, borderBottomColor:'#6B705C', width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:40,color:'#6B705C', textAlign:'center', marginBottom:10}}>Market</Text>
                <TextInput onChangeText={(e) => filterSearch(e)} placeholderTextColor={'white'} style={{width:250, textAlign:'center', color:'white', borderRadius:10, backgroundColor:'#6B705C'}} placeholder='Search...'/>
            </View>

    {/* === Filter === */}
            <View style={{ paddingVertical:8,  justifyContent:'center', alignItems:'center' ,width:'90%', borderRadius:10,marginTop:20, backgroundColor:'#6B705C'}}>
                <FilterBar colorText='#6B705C' value={(e) => console.log(e)} data={dataEvent}/>
            </View>

    {/* === Card Vendor === */}
    {/* Best vendor */}
            <View style={{marginTop:20, paddingVertical:10, width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:30,fontWeight:'bold', alignSelf:'flex-end', paddingVertical:5, marginRight:10, color:'white', marginBottom:10, backgroundColor:'#6B705C',paddingRight:10, paddingLeft:90}}>Best Vendor</Text>
                <FlatList
                    centerContent={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true} horizontal={true}
                    data={dataSearch.length >0 ? dataSearch :dummyVendorMarket}
                    renderItem={(data) => 
                    <TouchableOpacity onPress={() => navigation.push('ProfileVendor',data.item)}><CardVendor vendorName={data.item.vendorName} img={data.item.img} /></TouchableOpacity>}
                    keyExtractor={(data,i) => i}
                />
            </View>
    {/* Cheap vendor */}
            <View style={{marginTop:20, paddingVertical:10, width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:30,fontWeight:'bold',paddingVertical:5, alignSelf:'flex-start', marginLeft:10, color:'white', marginBottom:10, backgroundColor:'#6B705C',paddingRight:90, paddingLeft:10}}>Cheap Vendor</Text>
                <FlatList
                    centerContent={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true} horizontal={true}
                    data={dataSearch.length >0 ? dataSearch :dummyVendorMarket}
                    renderItem={(data) => 
                    <TouchableOpacity onPress={() => navigation.push('ProfileVendor',data.item)}><CardVendor vendorName={data.item.vendorName} img={data.item.img} /></TouchableOpacity>}
                    keyExtractor={(data,i) => i}
                />
            </View>
    {/* discount */}
            <View style={{marginTop:20, paddingVertical:10, width:'100%', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold', paddingVertical:5, marginRight:10, color:'white', marginBottom:10, backgroundColor:'#6B705C',paddingHorizontal:10, maxWidth:300}}>Discount in this month</Text>
                <FlatList
                    centerContent={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true} horizontal={true}
                    data={dataSearch.length >0 ? dataSearch :dummyVendorMarket}
                    renderItem={(data) => 
                    <TouchableOpacity onPress={() => navigation.push('ProfileVendor',data.item)}><CardVendor vendorName={data.item.vendorName} img={data.item.img} /></TouchableOpacity>}
                    keyExtractor={(data,i) => i}
                />
            </View>

        </ScrollView>
)
}

export default MarketScreen

const styles = StyleSheet.create({
    con:{
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%'
    }
})