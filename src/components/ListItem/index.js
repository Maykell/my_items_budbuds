import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { itemActions } from "../../store/ducks/item";

import { Text } from "react-native";

import { Switch, TouchableRipple } from "react-native-paper";
import Container from "../Container";

import { screens } from "../../config";
import styles from "./styles";

import NavigationService from "../../navigation/NavigationService";

class ListItem extends PureComponent {
    state = {
        buyMore: false
    };

    componentDidMount() {
        const { item } = this.props;
        this.setState({ buyMore: item.buyMore });
    }

    _handleListItem = item => {
        NavigationService.navigate(screens.RegisterScreen, {
            item
        });
    };

    _handleChangeSwitchItem = () => {
        const { item, updateItem } = this.props;

        let newItem = {
            ...item,
            buyMore: !item.buyMore
        };

        console.log("NEW ITEM ", newItem);

        this.setState({ buyMore: !this.state.buyMore }, () => {
            updateItem(newItem);
        });
    };

    render() {
        const { item } = this.props;

        return (
            <TouchableRipple onPress={() => this._handleListItem(item)}>
                <Container row style={styles.container}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Switch
                        style={{ flex: 1, alignItems: "flex-end" }}
                        value={this.state.buyMore}
                        onValueChange={this._handleChangeSwitchItem}
                    />
                </Container>
            </TouchableRipple>
        );
    }
}

const mapStateToProps = state => ({
    storeItem: state.item
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(itemActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);
