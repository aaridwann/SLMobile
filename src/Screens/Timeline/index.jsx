import { View, Text, Button, FlatList, ScrollView, Modal } from 'react-native'
import React, { Suspense, useState } from 'react'
import AppAxios from '../../Utils/AppAxios'
// import TopNavScreen from '../../Components/TopNav'
// import CardTimelineComponent from '../../Components/CardTimeline'
import DataTimeline from '../../../dummy/DataTimeline'
import SplashScreen from '../Splash Screen'
// import ModalScreen from '../../Components/Modal'
const ModalScreen = React.lazy(() => import('../../Components/Modal'))
const CardTimelineComponent = React.lazy(() => import('../../Components/CardTimeline'))
const TopNavScreen = React.lazy(() => import('../../Components/TopNav'))

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
    <View  style={{ width:'100%', flex:1, justifyContent:'flex-start', alignItems:'center'}}>
      {/*==== Top ==== */}
      <View style={{ elevation:20, shadowColor:'black', width:'100%', backgroundColor:'white', height:'8%', justifyContent:'center', alignItems:'center'}}>
        <Suspense fallback={<SplashScreen/>}>
          <TopNavScreen/>
        </Suspense>
      </View>
  
      <Suspense fallback={<SplashScreen/>}>
        <ModalScreen close={(e) => close(e)} img={showModal}/>
      </Suspense>

      {/* ==== Card ==== */}
      <FlatList style={{width:'100%', flex:1}} 
        data={DataTimeline}
        renderItem={data =>  
          <Suspense fallback={<SplashScreen/>}>
            <CardTimelineComponent showModal={(e) => show(e)} avatar={data.item.img[3]} name={data.item.name} city={data.item.location.city} 
            country={data.item.location.country} img={data.item.img} date={data.item.date} />
          </Suspense>
        }
        keyExtractor={(data,i) => i}
        />


    </View>
  )
}

export default TimelineScreen