import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../config";
import jwt_decode from "jwt-decode";

const AppAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 500,
})


AppAxios.interceptors.request.use(async function (config) {
    const data = await AsyncStorage.getItem('auth').then((data) => JSON.parse(data)).catch((err) => err)
    const {exp} = data.user
    const {token} = data
     
    if(exp <= Date.now()){
        await axios.get(`${BASE_URL}/auth/refreshtoken`)
        .then(async (res) => {
        const decode = jwt_decode(res.data.token)
        const user = {user:decode,token:token}
        await AsyncStorage.setItem('auth',JSON.stringify(user))
        config.headers.Authorization = `Bearer ${res.data.token}`
        })
        .catch(err => alert(err))
    }

    return config;
  }, function (error) {
    // Do something with request error
    return console.log(error.response)
  });
  
  AppAxios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('==>',response)
    return response;
  }, function (error) {
    alert(error.response.data.message)
    console.log('==>',error.response.data)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default AppAxios
