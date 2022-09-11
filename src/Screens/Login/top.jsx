import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopScreen = () => {
  return (
    <View style={styles.con}>
      <Text style={{ color:'white', fontSize:40, letterSpacing:15,fontWeight:'100'}}>STORY</Text>
      <Text style={{ color:'white', fontSize:40, marginTop:-15, fontWeight:'100', letterSpacing:15}}>LIFE</Text>
      <Text style={{ color:'white', fontSize:10, letterSpacing:3}}>BEST STORY - BEST VENDOR - BEST PRICE</Text>
    </View>
  )
}

export default TopScreen

const styles = StyleSheet.create({
    con:{
        alignItems:'center',
        // paddingTop:20,
        width:'100%',
        flex:1,
        elevation: 50,
        shadowColor: '#2c2e28',
        backgroundColor:'#6B705C',
        borderBottomLeftRadius:200,
        borderBottomRightRadius:200
    }
})