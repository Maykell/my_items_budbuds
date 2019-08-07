import { StyleSheet } from "react-native";
import { marginSize } from "../../styles/sizes";
import { colors } from "../../styles";

const styles = StyleSheet.create({
    listContentContainer: {
        flexGrow: 1
    },
    titleItems: {
        flex: 4,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: marginSize.large,
        color: colors.greenBudBuds
    },
    titleRepor: {
        flex: 1,
        alignItems: "flex-end",
        fontSize: 18,
        fontWeight: "bold",
        color: colors.greenBudBuds
    }
});

export default styles;
