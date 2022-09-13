import AsyncStorage from "@react-native-async-storage/async-storage"
import { useContext } from "react"
import { BASE_URL } from "../../config"
import { AuthContext } from "../../Context/AuthContext"
import AppAxios from "../AppAxios"


 const LogoutFunction =  (navigation)  => {
    AppAxios.delete(`${BASE_URL}/auth/logout`).then((res) => res.data)
    // const {setAuth} = useContext(AuthContext)
    // setAuth({user:false,token:false,loading:false})
    // AsyncStorage.removeItem('auth')
    
    // return (
    //     navigation.navigate("Login")
        
    // )

}

export default LogoutFunction