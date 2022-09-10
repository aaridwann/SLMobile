import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavbarComponent from '../../Components/NavMenu'
import FilterBar from '../../Components/Filter'
import CardVendor from '../../Components/CardVendor'
const dataEvent = ['wedding','prewedding','engagement','party']


const MarketScreen = () => {
  return (
        <ScrollView horizontal={false} style={{flex:1}} showsVerticalScrollIndicator={false} contentContainerStyle={styles.con}>
    {/* === Navbar === */}
            <NavbarComponent value={(data) => console.log(data)} backgroundColor='#6B705C' data={dataEvent}  />

    {/* === Input Search === */}
            <View style={{ paddingBottom:20, borderBottomWidth:1.5, borderBottomColor:'#6B705C', width:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:40,color:'#6B705C', marginBottom:10}}>Photoraphy</Text>
                <TextInput placeholderTextColor={'white'} style={{width:250, textAlign:'center', color:'white', borderRadius:10, backgroundColor:'#6B705C'}} placeholder='Search...'/>
            </View>

    {/* === Filter === */}
            <View style={{ paddingVertical:8,  justifyContent:'center', alignItems:'center' ,width:'90%', borderRadius:10,marginTop:20, backgroundColor:'#6B705C'}}>
                <FilterBar colorText='#6B705C' value={(e) => console.log(e)} data={dataEvent}/>
            </View>

    {/* === Card Vendor === */}
            <View style={{marginTop:20, paddingVertical:10, width:'100%', justifyContent:'center', alignItems:'center'}}>
                <FlatList
                    centerContent={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true} horizontal={true}
                    data={dataEvent}
                    renderItem={(data) => <TouchableOpacity><CardVendor/></TouchableOpacity>}
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
        justifyContent:'flex-start'
    }
})