import { PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service';
// import { typePermisson } from '../GetPermission';
import GetPermission, { typePermisson } from '../GetPermission';

// export async function GetPermission() {

//     try {
//         const granted = await PermissionsAndroid.request(
//             // 'PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION',
//             typePermisson.location,
//             {
//                 title: "Location Permission",
//                 message:
//                     "Storylife app needs your location " +
//                     "you can find the best vendor in any location.",
//                 buttonNeutral: "Ask Me Later",
//                 buttonNegative: "Cancel",
//                 buttonPositive: "OK"
//             }
//         ); if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             // console.log("You can use the camera");
//             return true
//         } else {
//             // console.log("Camera permission denied");
//             return false
//         }
//     } catch (err) {
//         return false
//         // console.warn(err);
//     }
// }

const opt = {
    enableHighAccuracy: true, timeout: 15000, maximumAge: 10000
};
const getCurrentPosition = () => new Promise((resolve, error) => Geolocation.getCurrentPosition(resolve, error, opt));

export default async function GetLocation() {
    const permission = await GetPermission(typePermisson.location)
    // const permission = await GetPermission()
    if (!permission) return { state: false, message: 'please enable your location for this app' }
    try {
        const location = await getCurrentPosition()
        return { state: true, data: location.coords }
    } catch (error) {
        return { state: false, message: error }
    }
}