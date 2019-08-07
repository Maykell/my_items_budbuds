import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { itemActions } from "../../store/ducks/item";

import { StatusBar } from "react-native";
import { Container, List, Loading } from "../../components";
import { FAB } from "react-native-paper";

import styles from "./styles";

import { screens } from "../../config";
import { defaultTheme } from "../../styles/themes";

class MainScreen extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            this.props.findAllItems();
        });
    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    _renderList = () => <List data={this.props.item.data} />;

    _navigateToRegisterScreen = () => {
        this.props.navigation.navigate(screens.RegisterScreen);
    };

    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor={defaultTheme.primaryDark}
                    barStyle="light-content"
                />
                {this._renderList()}
                <FAB
                    style={styles.fab}
                    icon="add"
                    onPress={() => this._navigateToRegisterScreen()}
                />
                <Loading loading={this.props.item.loading} />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(itemActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen);
