import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';

const event = ['Egypt', 'Canada', 'Australia', 'Ireland'];

const BookingScreen = () => {
  return (
    <View style={{ flex:1, alignItems: 'center'}}>
      {/* === Title === */}
      <View
        style={{
          width: '100%',
          paddingVertical: 20,
          backgroundColor: '#6B705C',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
          Booking Form
        </Text>
      </View>

      {/* === Choose Event === */}
      <View style={{paddingVertical:4, width:'100%', justifyContent:'center', alignItems:'center', borderBottomWidth:2, borderBottomColor:'#6B705C'}}>
        <Text style={{color:'#6B705C', fontWeight:'500', fontSize:15}}>Choose your event</Text>
        <SelectDropdown
          data={event}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>

      {/* === Details Package */}

      <View style={{width:'100%', height:360, alignItems:'center', justifyContent:'flex-start', borderBottomWidth:2, borderBottomColor:'#6B705C'}}>
        <Text style={{marginVertical:10, fontSize:19, fontWeight:'500'}}>Selected Package</Text>

          <View style={{width:'80%', height:'50%', overflow:'hidden', borderRadius:15, backgroundColor:'lightblue'}}>
            <Image style={{width:'100%' , height:'100%', resizeMode:'cover'}} source={{uri:'https://i.pinimg.com/564x/66/53/a6/6653a6c10d7ef45207e1457ffadc6e88.jpg'}} />
          </View>

          <View style={{width:'80%', maxHeight:100, marginTop:10, backgroundColor:'white',padding:10, borderBottomRightRadius:20, borderBottomLeftRadius:20,}}>
            <Text style={{textAlign:'center', fontSize:15}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos nulla laboriosam eaque facilis porro sapiente quod tempora mollitia. Error sint quisquam recusandae, ipsum nihil nesciunt non odit perspiciatis tempore!
            </Text>
          </View>

      </View>

      {/* === Calculation ===*/}

      <View style={{width:'100%', justifyContent:'center', backgroundColor:'white', borderBottomWidth:1, borderColor:'black', paddingVertical:15, alignItems:'center'}}>
          <View style={{flexDirection:'row', width:'60%', justifyContent:'space-between'}}>
            <Text>Price</Text>
            <Text>Rp. 8.500.000</Text>
          </View>
          <View style={{flexDirection:'row', width:'60%', justifyContent:'space-between'}}>
            <Text>Tranportation</Text>
            <Text>Rp. 8.500.000</Text>
          </View>
          <View style={{flexDirection:'row', width:'60%', justifyContent:'space-between'}}>
            <Text>Total</Text>
            <Text style={{ borderBottomWidth:1, width:120, textAlign:'right', borderBottomColor:'black', paddingBottom:4}}>Rp. 8.500.000</Text>
          </View>
          <View style={{flexDirection:'row', width:'60%', justifyContent:'space-between'}}>
            <Text>Discount</Text>
            <Text style={{ borderBottomWidth:1, width:120, borderBottomColor:'black', textAlign:'right', paddingBottom:4}}>Rp. 8.500.000</Text>
          </View>
          <View style={{marginTop:10,flexDirection:'row', width:'60%', justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Grand Total</Text>
            <Text style={{ fontWeight:'bold', fontSize:16 }}>Rp. 8.500.000</Text>
          </View>

      </View>

        {/* ==== Button Continue ====*/}
        <TouchableOpacity style={{ backgroundColor:'#6B705C', paddingHorizontal:30, padding:8, marginTop:10, borderRadius:4}}>
            <Text style={{fontWeight:'bold', color:'white'}}>Next</Text>
        </TouchableOpacity>

    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
