import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import NavbarComponent from '../../Components/Navbar'
import CheckBoxComponent from '../../Components/Checkbox'
import DropDownComponent from '../../Components/DropDown'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'


const dataVendor = ['photography','videoragphy','makeup artist', 'decoration']

const AddEventScreen = () => {
    const [finalData,setFinalData] = useState({
        nameEvent:'',
        locationEvent:'',
        dateEvent:'',
        categoryEvent:'',
        vendorNeed:[]
    })
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [data,setData] = useState([])
    function Add(state,value){
        if(state){
            setFinalData({...finalData, vendorNeed:[...data,value]})
            setData([...data, value])
        }else{
            setFinalData({...finalData, vendorNeed:data.filter((x) => x !== value)})
            setData(data.filter(item => item !== value))
        }
    }
    console.log(finalData);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}} contentContainerStyle={{ alignItems:'center'}}>
 
      <NavbarComponent backgroundColor={'#B7B7A4'}/>

        {/* ==== Name Event ==== */}
        <View style={{width:'90%', marginVertical:10, alignItems:'center'}}>
            <Text style={{fontSize:27, color:'#B7B7A4'}}>Name Event</Text>
            <TextInput onChangeText={(e) => setFinalData({...finalData, nameEvent:e})} placeholderTextColor={'#B7B7A4'} style={{ fontWeight:'500', color:'#B7B7A4', width:'100%', textAlign:'center', borderBottomWidth:1.5, borderColor:'#B7B7A4'}} placeholder='Your Event Name'/>
        </View>

        {/* ==== Location Event ==== */}
        <View style={{width:'90%', marginVertical:10, alignItems:'center'}}>
            <Text style={{fontSize:27, color:'#B7B7A4'}}>Location Event</Text>
            <TextInput onChangeText={(e) => setFinalData({...finalData, locationEvent:e})} placeholderTextColor={'#B7B7A4'} style={{ fontWeight:'500', color:'#B7B7A4', width:'100%', textAlign:'center', borderBottomWidth:1.5, borderColor:'#B7B7A4'}} placeholder='Your Event Name'/>
        </View>

        {/* ==== Date Event ==== */}
        <View style={{width:'90%', marginVertical:10, alignItems:'center', borderBottomWidth:1.5, borderColor:'#B7B7A4', paddingBottom:20}}>
            <Text style={{fontSize:27, color:'#B7B7A4'}}>Date Event</Text>

            <TouchableOpacity style={{ marginTop:10}} onPress={() => setOpen(true)}>
                <Text style={{fontSize:18, color:'#B7B7A4'}}>{moment(date).format('dddd, D MMMM YYYY, HH:mm')}</Text>
            </TouchableOpacity>
            {/* === modal Date === */}
            <DatePicker minimumDate={new Date()} modal mode='datetime' open={open} date={date} locale='id' is24hourSource='locale'
                onConfirm={(date) => {
                setOpen(false)
                setFinalData({...finalData, dateEvent:date})
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />
        </View>

        {/* ==== Category Event ==== */}
        <View style={{width:'90%', borderBottomWidth:1.5, borderColor:'#B7B7A4', paddingBottom:20, marginVertical:10, alignItems:'center'}}>
            <Text style={{fontSize:27, color:'#B7B7A4'}}>Category Event</Text>
            <DropDownComponent style={{marginTop:10}} color='#B7B7A4' select={(e) => setFinalData({...finalData, categoryEvent:e})}/>
        </View>

        {/* ==== Vendor Need ==== */}
        <View style={{width:'90%', marginVertical:10, alignItems:'center'}}>
            <Text style={{fontSize:27, color:'#B7B7A4'}}>Vendor Needs</Text>
            <View style={{flexDirection:'row', paddingBottom:10, flexWrap:'wrap', alignItems:'center', justifyContent:'space-around', borderBottomWidth:1.5, borderColor:'#B7B7A4'}}>
                    {dataVendor.map((x,i) => (
                        <CheckBoxComponent key={i} value={(e,data) => Add(e,data)} data={x} />
                    ))}
            </View>

        </View>

        {/* ==== Button ==== */}
        <TouchableOpacity style={{marginTop:20, paddingHorizontal:40, paddingVertical:10, backgroundColor:'#B7B7A4'}}>
            <Text style={{ color:'white', fontSize:20, fontWeight:'600'}}>Add Event</Text>
        </TouchableOpacity>

    </ScrollView>
  )
}

export default AddEventScreen

const styles = StyleSheet.create({})