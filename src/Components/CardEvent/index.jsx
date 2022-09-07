import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/id'

const CardEvent = ({date, image='https://i.pinimg.com/564x/c9/54/6b/c9546b1e71e990d54a7cd363932d7c18.jpg', category='ENGAGEMENT'}) => {

const dateData = moment(date).locale('id').format('DD MMMM YYYY')

return (
    <View style={styles.cont}>

      <View style={styles.A}>
        <View style={{ justifyContent:'center', alignItems:'center'}}>
          <Text style={{ fontSize:38, fontWeight:'bold', marginBottom:-10}}>{dateData.split(' ')[0]}</Text>
          <Text style={{ fontWeight:'500'}}>{dateData.split(' ')[1].slice(0,3)}</Text>
        </View>
        <Text>{category.toLocaleUpperCase()}</Text>
      </View>

      <View style={{flex:1, backgroundColor:'yellow'}}>
        <Image style={{width:'100%',height:'100%', resizeMode:'cover'}} source={{uri:image}}/>
      </View>

    </View>
  );
};

export default React.memo(CardEvent);

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    height: 150,
    marginBottom:10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  A:{
    justifyContent:'space-around',
    alignItems:'center',
    width:'28%',
    marginHorizontal:8
  }
});
