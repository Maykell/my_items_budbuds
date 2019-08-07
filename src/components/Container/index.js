import React from "react";
import { View } from "react-native";
import styles from "./styles";

const Container = props => (
    <View
        style={[
            styles.container,
            { flexDirection: props.row ? "row" : "column" },
            props.style
        ]}
    >
        {props.children}
    </View>
);

export default Container;
