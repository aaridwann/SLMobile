import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    name:'ridwan',
    img:'https://i.pinimg.com/564x/3f/10/ac/3f10acaf4674b7bd299b538293d456d3.jpg'
  },
  {
    name:'yusuf',
    img:'https://i.pinimg.com/236x/33/5a/94/335a94e994cdcb85a8d5d30e0db4a968.jpg'
  },
  {
    name:'andri',
    img:'https://i.pinimg.com/236x/b0/29/31/b02931f37ee5296f3f59ef7fc3d5b577.jpg'
  },
  {
    name:'ridwan',
    img:'https://i.pinimg.com/564x/3f/10/ac/3f10acaf4674b7bd299b538293d456d3.jpg'
  },
  {
    name:'yusuf',
    img:'https://i.pinimg.com/236x/33/5a/94/335a94e994cdcb85a8d5d30e0db4a968.jpg'
  },
  {
    name:'andri',
    img:'https://i.pinimg.com/236x/b0/29/31/b02931f37ee5296f3f59ef7fc3d5b577.jpg'
  },
  {
    name:'ridwan',
    img:'https://i.pinimg.com/564x/3f/10/ac/3f10acaf4674b7bd299b538293d456d3.jpg'
  },
  {
    name:'yusuf',
    img:'https://i.pinimg.com/236x/33/5a/94/335a94e994cdcb85a8d5d30e0db4a968.jpg'
  },
  {
    name:'andri',
    img:'https://i.pinimg.com/236x/b0/29/31/b02931f37ee5296f3f59ef7fc3d5b577.jpg'
  },
  {
    name:'ridwan',
    img:'https://i.pinimg.com/564x/3f/10/ac/3f10acaf4674b7bd299b538293d456d3.jpg'
  },
  {
    name:'yusuf',
    img:'https://i.pinimg.com/236x/33/5a/94/335a94e994cdcb85a8d5d30e0db4a968.jpg'
  },
  {
    name:'andri',
    img:'https://i.pinimg.com/236x/b0/29/31/b02931f37ee5296f3f59ef7fc3d5b577.jpg'
  },
  {
    name:'ridwan',
    img:'https://i.pinimg.com/564x/3f/10/ac/3f10acaf4674b7bd299b538293d456d3.jpg'
  },
  {
    name:'yusuf',
    img:'https://i.pinimg.com/236x/33/5a/94/335a94e994cdcb85a8d5d30e0db4a968.jpg'
  },
  {
    name:'andri',
    img:'https://i.pinimg.com/236x/b0/29/31/b02931f37ee5296f3f59ef7fc3d5b577.jpg'
  },
  {
    name:'ridwan',
    img:'https://i.pinimg.com/564x/3f/10/ac/3f10acaf4674b7bd299b538293d456d3.jpg'
  },
  {
    name:'yusuf',
    img:'https://i.pinimg.com/236x/33/5a/94/335a94e994cdcb85a8d5d30e0db4a968.jpg'
  },
  {
    name:'andri',
    img:'https://i.pinimg.com/236x/b0/29/31/b02931f37ee5296f3f59ef7fc3d5b577.jpg'
  },
  {
    name:'ridwan',
    img:'https://i.pinimg.com/564x/3f/10/ac/3f10acaf4674b7bd299b538293d456d3.jpg'
  },
  {
    name:'yusuf',
    img:'https://i.pinimg.com/236x/33/5a/94/335a94e994cdcb85a8d5d30e0db4a968.jpg'
  },
  {
    name:'andri',
    img:'https://i.pinimg.com/236x/b0/29/31/b02931f37ee5296f3f59ef7fc3d5b577.jpg'
  },
  {
    name:'ridwan',
    img:'https://i.pinimg.com/564x/3f/10/ac/3f10acaf4674b7bd299b538293d456d3.jpg'
  },
  {
    name:'yusuf',
    img:'https://i.pinimg.com/236x/33/5a/94/335a94e994cdcb85a8d5d30e0db4a968.jpg'
  },
  {
    name:'andri',
    img:'https://i.pinimg.com/236x/b0/29/31/b02931f37ee5296f3f59ef7fc3d5b577.jpg'
  }
]

const FollowingScreen = () => {
  return (
    <View style={{flex:1}}>

      {/* === Top back button === */}
      <View style={{paddingVertical:2, paddingHorizontal:8, backgroundColor:'lightblue', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
        <TouchableOpacity style={{ }}>
          <Ionicons name={"arrow-back"} size={40} color={'white'} />
        </TouchableOpacity>
        <Text style={{ fontWeight:'bold', color:'white', marginLeft:'30%'}}>Following</Text>
      </View>

      {/* === List === */}
      <FlatList
        renderItem={(data) => <Card name={data.item.name} img={data.item.img}/>}
        data={data}
        keyExtractor={(data) => data.img}
      />

    </View>
  )
}

export default FollowingScreen

const styles = StyleSheet.create({})

function Card({name='Ridwan',img}){
  return(
    <View style={{ flexDirection:'row', paddingVertical:10, justifyContent:'space-between', paddingHorizontal:20, alignItems:'center', borderBottomWidth:2, borderColor:'lightblue' }}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity>
            <Image style={{ resizeMode:'cover', borderRadius:50 ,width:50,height:50, marginRight:10}} source={{uri:img}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontWeight:'bold', fontSize:18}}>{name}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ backgroundColor:'lightblue', paddingHorizontal:8, paddingVertical:4, borderRadius:8}}>
          <Text style={{ fontWeight:'bold', color:'white'}}>Follow</Text>
        </TouchableOpacity>
    </View>
  )
}