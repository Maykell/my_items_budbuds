import React from "react";
import { Alert } from "react-native";

const alert = (title, msg, onPress) => {
    Alert.alert(title, msg, [{ text: "OK", onPress }], {
        cancelable: false
    });
};

export const confirmYesNoAlert = (
    title,
    msg,
    onNo,
    labelNo,
    onYes,
    labelYes
) => {
    Alert.alert(
        title,
        msg,
        [
            { text: labelNo, onPress: onNo, style: "cancel" },
            { text: labelYes, onPress: onYes }
        ],
        { cancelable: false }
    );
};

export const confirmYesNoNeutralAlert = (
    title,
    msg,
    onNeutral,
    labelNeutral,
    onNo,
    labelNo,
    onYes,
    labelYes
) => {
    Alert.alert(
        title,
        msg,
        [
            { text: labelNeutral, onPress: onNeutral },
            { text: labelNo, onPress: onNo, style: "cancel" },
            { text: labelYes, onPress: onYes }
        ],
        { cancelable: false }
    );
};

export default alert;
