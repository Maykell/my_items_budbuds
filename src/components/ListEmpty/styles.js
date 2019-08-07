import { StyleSheet } from "react-native";
import { defaultTheme } from "../../styles/themes";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        color: defaultTheme.primaryTextColor,
        fontWeight: "bold"
    }
});
