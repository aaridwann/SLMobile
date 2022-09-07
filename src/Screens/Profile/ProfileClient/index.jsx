import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardA from './CardA';
import LinearGradient from 'react-native-linear-gradient';
import CardEvent from '../../../Components/CardEvent';
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'moment/locale/id'
import dummyEvent from '../../../../dummy/event';

const ProfileClientScreen = () => {
    // console.log(moment(new Date(2022,7,11)).locale('id').format('DD MMMM YYYY'))
    // console.log(new Date(2022,7,11))
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <View style={{alignSelf: 'flex-start', width: '75%', height: '47%'}}>
        <CardA />
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
