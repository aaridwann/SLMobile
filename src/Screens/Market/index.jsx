import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import NavbarComponent from '../../Components/NavMenu'
import FilterBar from '../../Components/Filter'
import CardVendor from '../../Components/CardVendor'

const MarketScreen = () => {
  return (
<ScrollView>

    <View style={styles.con}>
{/* === Navbar === */}
        <NavbarComponent/>

{/* === Input Search === */}
        <View style={{ paddingBottom:20, borderBottomWidth:2, borderBottomColor:'lightblue', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:40, marginBottom:10}}>Photoraphy</Text>
             <TextInput style={{width:250, textAlign:'center', color:'white', borderRadius:10, backgroundColor:'lightblue'}} placeholder='Search...'/>
        </View>

{/* === Filter === */}
        <View style={{ paddingVertical:8,  justifyContent:'center', alignItems:'center' ,width:'90%', borderRadius:10,marginTop:20, backgroundColor:'lightblue'}}>
            <FilterBar/>
        </View>

{/* === Card Vendor === */}
        <View style={{marginTop:20, paddingVertical:10, width:'100%', justifyContent:'center', alignItems:'center'}}>
            <ScrollView centerContent={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true} horizontal={true}>
                <CardVendor/>
                <CardVendor/>
                <CardVendor/>
                <CardVendor/>
                <CardVendor/>
                <CardVendor/>
            </ScrollView>
        </View>

    </View>

    </ScrollView>
)
}

export default MarketScreen

const styles = StyleSheet.create({
    con:{
        flex:1,
        alignItems:'center',
    }
})