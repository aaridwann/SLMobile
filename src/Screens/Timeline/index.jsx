import { View, Text, Button, FlatList, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import AppAxios from '../../Utils/AppAxios'
import TopNavScreen from '../../Components/TopNav'
import CardTimelineComponent from '../../Components/CardTimeline'
import DataTimeline from '../../../dummy/DataTimeline'
import ModalScreen from '../../Components/Modal'


const TimelineScreen = () => {
  const [data,setData] = useState([])
  const [showModal,setShowModal] = useState({img:'',state:false})

  function show (e){
    setShowModal({...showModal,img:e,state:!showModal.state})
  }
  function close(e){
    setShowModal({...showModal, state:e})
  }
  
  return (
    <ScrollView style={{flex:1,width:'100%'}}  contentContainerStyle={{ flex:1, justifyContent:'flex-start', alignItems:'center'}}>
      {/*==== Top ==== */}
       <View style={{ elevation:20, shadowColor:'black', width:'100%', backgroundColor:'white', height:'8%', justifyContent:'center', alignItems:'center'}}>
        <TopNavScreen/>
      </View>
      <ModalScreen close={(e) => close(e)} img={showModal}/>

      {/* ==== Card ==== */}
      <FlatList style={{width:'100%', flex:1}} 
        data={DataTimeline}
        renderItem={data =>  
        <CardTimelineComponent showModal={(e) => show(e)} avatar={data.item.img[3]} name={data.item.name} city={data.item.location.city} 
        country={data.item.location.country} img={data.item.img} date={data.item.date} />}
        keyExtractor={(data,i) => i}
        />


    </ScrollView>
  )
}

export default TimelineScreen