import React from "react";
import { View, Modal } from "react-native";
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator
} from "react-native-indicators";

import styles from "./styles";
import { defaultTheme } from "../../styles/themes";

const Loading = ({ loading }) => {
    return (
        <Modal
            transparent={true}
            onDismiss={() => {}}
            animationType={"none"}
            visible={loading}
            onRequestClose={() => {}}
        >
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicator}>
                    <WaveIndicator size={48} color={defaultTheme.secondary} />
                </View>
            </View>
        </Modal>
    );
};

export default Loading;
