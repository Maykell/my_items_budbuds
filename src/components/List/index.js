import React, { PureComponent } from "react";
import { FlatList, Text } from "react-native";
import { Container, ListEmpty, ListItem } from "../../components";
import styles from "./styles";

export default class List extends PureComponent {
    _renderItem = ({ item }) => <ListItem item={item} />;

    _renderHeader = () => (
        <Container row style={{ paddingTop: 16, paddingBottom: 16 }}>
            <Text style={styles.titleItems}>Items</Text>
            <Text style={styles.titleRepor}>Repor?</Text>
        </Container>
    );

    _renderList = () => {
        const { data } = this.props;

        const visibleHeader = data !== null ? data : [];

        return (
            <FlatList
                data={data}
                extraData={this.state}
                keyExtractor={(item, index) => item + index}
                ListEmptyComponent={
                    <ListEmpty title="Não há items cadastrados" />
                }
                ListHeaderComponent={
                    visibleHeader.length > 0 ? this._renderHeader : null
                }
                contentContainerStyle={styles.listContentContainer}
                renderItem={this._renderItem}
            />
        );
    };

    render() {
        return <Container>{this._renderList()}</Container>;
    }
}
