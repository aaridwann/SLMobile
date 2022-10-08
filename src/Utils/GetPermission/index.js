import { PermissionsAndroid } from 'react-native'
export const typePermisson = {
    camera: PermissionsAndroid.PERMISSIONS.CAMERA,
    readContact: PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    location: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    readMediaImage: PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    readMediaVideo: PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
    notif: PermissionsAndroid.PERMISSIONS.POST_NOTIFICATION,
}

export default async function GetPermission(type) {
    try {
        const granted = await PermissionsAndroid.request(
            type,
            {
                title: `${type} Permission`,
                message:
                    `Storylife app needs your ${type} ` +
                    "you can find the best vendor in any location.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        )
         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log(`You can use the ${type}`);
            return true
        } else {
            console.log(`${type} permission denied`);
            return false
        }
    } catch (err) {
        return false
        console.warn(err);
    }
}