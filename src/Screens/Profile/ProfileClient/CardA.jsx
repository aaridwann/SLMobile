import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CardA = () => {
    const bio = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut impedit quas aperiam sint quasi quibusdam quidem? Fugiat, impedit illo reiciendis distinctio ipsam quo quos mollitia. Explicabo facere eius aspernatur qui.'
  return (
    <LinearGradient colors={['#B7B7A4','#6B705C']} style={styles.cont}>
        {/* === First === */}
      <View style={styles.first}>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 150 / 2,
            overflow: 'hidden',
          }}
          source={{
            uri: 'https://i.pinimg.com/564x/46/53/63/465363f6c1b791bfbf19ab85914aac92.jpg',
          }}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
            Jakarta, Indonesia
          </Text>
          <Text style={{color: 'white', fontSize: 10, fontWeight: '700'}}>
            Programmer
          </Text>
        </View>
      </View>

        <Text style={styles.name}>Ridwan Firmansyah</Text>
        <Pressable>
        <Text style={styles.state}>Client</Text>
        </Pressable>
        <Text style={styles.bio}>{bio.slice(0,100)}{'... Read more'}</Text>

    </LinearGradient>
  );
};

export default React.memo(CardA);

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical:5,
    borderBottomRightRadius: 250,

  },
  first: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name:{
    color:'white',
    fontSize:24,
    fontWeight:'500',
    margin:5,
    marginLeft:10
  },
  state:{
    paddingVertical:2,
    maxWidth:70,
    textAlign:'center',
    borderRadius:50,
    backgroundColor:'green',
    color:'white',
    margin:5,
    marginLeft:10
  },
  bio:{
    color:'white',
    maxWidth:200,
    margin:5,
    marginLeft:10
  }
});
