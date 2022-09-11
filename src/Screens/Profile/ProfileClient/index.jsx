import {Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <View style={{alignSelf: 'flex-start',flexDirection:'row', justifyContent:'space-between', width: '100%', height: '47%'}}>
        
        <View style={{ width:'75%'}}>
          <CardA />
        </View>

        <View style={{ height:'50%', marginRight:20, alignItems:'center', justifyContent:'space-evenly'}}>
          <TouchableOpacity onPress={() => navigation.push('Setting')}  style={{alignItems:'center'}}>
            <Ionicons name={"settings-outline"} size={30} color={'#B7B7A4'} />
            <Text style={{color:'#B7B7A4', fontWeight:'700'}}>Setting</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push('DirectMessage')} style={{alignItems:'center'}}>
            <Ionicons name={"chatbubbles-outline"} size={30} color={'#B7B7A4'} />
            <Text style={{color:'#B7B7A4', fontWeight:'700'}}>Message</Text>
          </TouchableOpacity>
        </View>

      </View>
      

      <LinearGradient colors={['#B7B7A4', '#6B705C']} style={styles.card}>
        <View style={{ flexDirection:'row', alignItems:'center'}}>
        <Pressable onPress={() => console.log('Add')}>
          <Ionicons name={"add-circle"} size={40} color={'white'} />
        </Pressable>
          <Text style={styles.titleCard}>Project Event</Text>
        </View>
            

          <ScrollView style={styles.cardList}>
            {dummyEvent.map((data,i) => (
                <Pressable onPress={() => console.log(data)} key={i}>
                    <CardEvent image={data.image} date={data.date} category={data.category}/>
                </Pressable>
            ))}

          </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ProfileClientScreen;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginTop: 20,
    borderTopLeftRadius: 150,
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end',
    paddingLeft: '8%',
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
