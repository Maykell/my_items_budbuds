import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export default StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.blackOverlay40
    },
    activityIndicator: {
        backgroundColor: colors.white,
        height: 120,
        width: 120,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-around"
    }
});
