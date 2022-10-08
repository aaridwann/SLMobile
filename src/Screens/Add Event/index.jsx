import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import NavbarComponent from '../../Components/Navbar'
import CheckBoxComponent from '../../Components/Checkbox'
import DropDownComponent from '../../Components/DropDown'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import AppAxios from '../../Utils/AppAxios'
import { BASE_URL } from '../../config'
import ReducerEvent, { EventState } from './reducer'


const AddEventScreen = () => {
    const [event,dispatch] = useReducer(ReducerEvent,EventState)
    console.log(event.data)
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
    const [warning,setWarning] = useState('')
    const ShowAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => Alert.alert("Cancel Pressed"),
                style: "cancel",
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  "This alert was dismissed by tapping outside of the alert dialog."
                ),
            }
        )
    }
  
    function submit () {
        const arr =[]
        // const {categoryEvent,dateEvent,locationEvent,nameEvent,vendorNeed} = finalData
        // if(!categoryEvent || !categoryEvent || !dateEvent||!locationEvent ||!nameEvent||!vendorNeed){
        // }
        // try {
            console.log(finalData);
        // } catch (error) {
        //     console.log(error)
        // }

    }

    function AddVendor(state,value){
        if(state){
            setFinalData({...finalData, vendorNeed:[...data,value]})
            
            setData([...data, value])
        }else{
            setFinalData({...finalData, vendorNeed:data.filter((x) => x !== value)})
            setData(data.filter(item => item !== value))
        }
    }

    async function GetCategory(){
        dispatch({type:'START_FETCHING'})
        try {
           const res = await AppAxios(`${BASE_URL}/event/category`)
           dispatch({type:'SUCCESS_FETCH',payload:res.data.data})
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        GetCategory()
    },[])
  return (
    <ScrollView horizontal={ false} nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={{flex:1}} contentContainerStyle={{ alignItems:'center', paddingBottom:20}}>
        {/* {warning && <ShowAlert/>} */}
      <NavbarComponent backgroundColor={'#B7B7A4'}/>

        {/* ==== Name Event ==== */}
        <View style={{width:'90%', marginVertical:10, alignItems:'center'}}>
            <Text style={{fontSize:27, color:'#B7B7A4'}}>Name Event</Text>
            <TextInput 
            // onChangeText={(e) => setFinalData({...finalData, nameEvent:e})}
            onChangeText={(e) => dispatch({type:'CHANGE_INPUT',payload:{key:'nameEvent',value:e}})}
             placeholderTextColor={'#B7B7A4'} style={{ fontWeight:'500', color:'#B7B7A4', width:'100%', textAlign:'center', borderBottomWidth:1.5, borderColor:'#B7B7A4'}} placeholder='Your Event Name'/>
        </View>

        {/* ==== Location Event ==== */}
        <View style={{width:'90%', marginVertical:10, alignItems:'center'}}>
            <Text style={{fontSize:27, color:'#B7B7A4'}}>Location Event</Text>
            <TextInput onChangeText={(e) => dispatch({type:'CHANGE_INPUT',payload:{key:'locationEvent',value:e}})} placeholderTextColor={'#B7B7A4'} style={{ fontWeight:'500', color:'#B7B7A4', width:'100%', textAlign:'center', borderBottomWidth:1.5, borderColor:'#B7B7A4'}} placeholder='Your Event Name'/>
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
                dispatch({type:"CHANGE_DATE",payload:date})
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
            <DropDownComponent dataValue={event.category.eventCategory} style={{marginTop:10}} color='#B7B7A4'
             select={(e) => dispatch({type:'CHANGE_INPUT',payload:{key:'categoryEvent',value:e}})}
             />
        </View>

        {/* ==== Vendor Need ==== */}
        <View style={{maxWidth:'90%', height:'26%', marginVertical:10, alignItems:'center'}}>
            <Text style={{fontSize:27, color:'#B7B7A4'}}>Vendor Needs</Text>
            <View style={{ width:'100%', flexWrap:'wrap', alignItems:'flex-start', justifyContent:'flex-start', borderBottomWidth:1.5, borderColor:'#B7B7A4'}}>
                    {event?.category?.vendorCategory?.map((x,i) => (
                        <CheckBoxComponent key={i} data={x}
                        value={() => dispatch({type:"ADD_VENDOR",payload:x})} />
                    ))}
            </View>
        </View>

        {/* ==== Button ==== */}
        <TouchableOpacity onPress={submit} style={{marginTop:50, paddingHorizontal:40, paddingVertical:10, backgroundColor:'#B7B7A4'}}>
            <Text style={{ color:'white', fontSize:20, fontWeight:'600'}}>Add Event</Text>
        </TouchableOpacity>

    </ScrollView>
  )
}

export default AddEventScreen

const styles = StyleSheet.create({})