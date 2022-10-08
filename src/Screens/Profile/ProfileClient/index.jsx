import {FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CardA from './CardA';
import LinearGradient from 'react-native-linear-gradient';
import CardEvent from '../../../Components/CardEvent';
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'moment/locale/id'
import dummyEvent from '../../../../dummy/event';

const ProfileClientScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor:'white', justifyContent: 'flex-start', alignItems: 'center'}}>
     
      <View style={{alignSelf: 'flex-start',flexDirection:'row', justifyContent:'space-between', width: '100%', height: '50%'}}>
        
        <View style={{ width:'75%'}}>
          <CardA navigation={navigation} />
        </View>

        <View style={{ height:'50%', marginRight:20, alignItems:'center', justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={() => navigation.push('Setting')}  style={{alignItems:'center'}}>
            <Ionicons name={"settings-outline"} size={30} color={'#B7B7A4'} />
            <Text style={{color:'#B7B7A4', fontWeight:'700'}}>Setting</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MoreStack',{screen:'DirectMessage'})} style={{alignItems:'center'}}>
            <Ionicons name={"chatbubbles-outline"} size={30} color={'#B7B7A4'} />
            <Text style={{color:'#B7B7A4', fontWeight:'700'}}>Message</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/*== tengah  */}

      <LinearGradient colors={['#B7B7A4', '#6B705C']} style={styles.card}>
        <View style={{ flexDirection:'row', alignItems:'center'}}>
        <Pressable style={{flexDirection:'row', alignItems:'center'}} 
        onPress={() => navigation.navigate('MoreStack',{screen:'AddEvent'})}>
          <Ionicons name={"add-circle"} size={40} color={'white'} />
          <Text style={styles.titleCard}>Project Event</Text>
        </Pressable>
        </View>
            

            <FlatList 
              contentContainerStyle={styles.cardList}
              style={{flex:1, width:'100%'}}
              data={dummyEvent}
              renderItem={({item}) => (
                <Pressable onPress={() => console.log(item)}>
                  <CardEvent image={item.image} date={item.date} category={item.category}/>
                </Pressable>
              )}
            />


      </LinearGradient>
    </View>
  );
};

export default ProfileClientScreen;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginTop: 20,
    borderTopLeftRadius: 120,
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    paddingLeft: '8%',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 50,
  },
  titleCard: {
    color: 'white',
    fontSize: 30,
    margin:10,
    fontWeight:'500',
    fontStyle:'italic'
  },
  cardList:{
    width:'100%',
    marginTop:5,
  }
});
