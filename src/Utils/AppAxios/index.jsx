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
    alert(error.response)
    return console.log(error.response)
  });

  export default AppAxios
