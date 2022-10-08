import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {BASE_URL} from '../../config';
import {AuthContext} from '../../Context/AuthContext';
import {ActionTypeUser} from '../../Context/Reducer/AuthReducer';
import AppAxios from '../AppAxios';

const LogoutFunction = async () => {
  return await AppAxios.delete(`/auth/logout`)
    .then(res => {
      return true
      // AsyncStorage.removeItem('auth')
      // return setAuth({user:false,token:false,loading:false})
    })
    .catch(err => {
    //   console.log(err.response);
      return false
    });
//   if (del) {
//     await AsyncStorage.removeItem('auth');
//     return dispatchAuth({
//       type: ActionTypeUser.deleteUser,
//       payload: {message: del},
//     });
//   }
};

export default LogoutFunction;
