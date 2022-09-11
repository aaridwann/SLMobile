import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext } from 'react'
import NavbarComponent from '../../Components/Navbar'
import LogoutFunction from '../../Utils/Logout/Logout'
import { AuthContext } from '../../Context/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
const menu = ['account','payment','logout',]


const SettingScreen = ({navigation}) => {
    const {auth,setAuth} = useContext(AuthContext)

    function change(data){
        switch (data.item) {
            case 'payment':
                return console.log('logout');
            case 'logout':
                    setAuth({user:false,token:false,loading:false})
                    AsyncStorage.removeItem('auth')
                    return console.log(auth);
            default:
                break;
        }
    }
  return (
    <View style={{flex:1, alignItems:'center'}}>
        <NavbarComponent navigation={navigation} backgroundColor={'#B7B7A4'} title={'Setting'}/>
        
            <FlatList
            style={{flex:1 , width:'90%'}}
            contentContainerStyle={{width:'100%',flex:1, justifyContent:'center'}}
                data={menu}
                renderItem={(data) => (
                    <TouchableOpacity onPress={() => change(data)} style={{ alignItems:'center', marginVertical:10, width:'100%', paddingHorizontal:10,paddingVertical:20, borderBottomWidth:2, borderColor:'#B7B7A4'}}>
                        <Text style={{color:'#B7B7A4', fontSize:18,fontWeight:'700'}}>{data.item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(data,i) => i}
                />
        </View>
  )
}

export default SettingScreen