import AsyncStorage from "@react-native-async-storage/async-storage"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"


 const LogoutFunction =  (navigation)  => {
    const {setAuth} = useContext(AuthContext)
    setAuth({user:false,token:false,loading:false})
    AsyncStorage.removeItem('auth')
    
    return (
        navigation.navigate("Login")
        
    )

}

export default LogoutFunction