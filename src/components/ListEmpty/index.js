import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { defaultTheme } from "../../styles/themes";

const ListEmpty = ({
    title,
    style,
    colorText = defaultTheme.primaryTextColor
}) => (
    <View style={[styles.container, style]}>
        <Text style={[styles.text, { color: colorText }]}>{title}</Text>
    </View>
);

export default ListEmpty;
