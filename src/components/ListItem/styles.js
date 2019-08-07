import { StyleSheet } from "react-native";
import { colors } from "../../styles";
import { paddingSize } from "../../styles/sizes";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: paddingSize.large
    },
    title: {
        fontSize: 16
    }
});
