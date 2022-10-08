import { View, StyleSheet, Button, Alert } from "react-native";

const AlertComponent = ({ title, message, textCancel, textOk, pressCancel, pressOk }) =>
    Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: pressOk }
        ]
    );

export default AlertComponent