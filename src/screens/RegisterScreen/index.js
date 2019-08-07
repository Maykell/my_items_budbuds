import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { itemActions } from "../../store/ducks/item";

import { ScrollView, StatusBar, Text } from "react-native";
import { TextInput, HelperText, RadioButton } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import { Container, Loading } from "../../components";

import { defaultTheme } from "../../styles/themes";
import { validate, alert } from "../../utils";
import styles from "./styles";

import uuidv1 from "uuid/v1";

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.nameField = React.createRef();
        this.purchaseDateField = React.createRef();
    }

    state = {
        uuid: "",
        name: "",
        unitValue: "",
        purchaseDate: "",
        buyMore: false
    };

    componentDidMount() {
        const item = this.props.navigation.getParam("item", null);

        console.log("REGISTER ITEM ", item);
        if (item !== null) {
            const { uuid, name, unitValue, purchaseDate, buyMore } = item;
            this.setState({ uuid, name, unitValue, purchaseDate, buyMore });
        }

        this.props.navigation.setParams({
            save: this._save,
            delete: this._delete
        });
    }

    _onChangeHandler(fieldName, value) {
        this.setState({
            [fieldName]: value
        });
    }

    _save = () => {
        if (!this._verifiedFields()) {
            alert("Campos", "Você deve preencher os campos obrigatórios");
            return;
        }

        const { uuid, name, unitValue, purchaseDate, buyMore } = this.state;

        const { saveItem, updateItem } = this.props;

        if (uuid.length > 0) {
            const item = {
                uuid: uuid,
                name: name,
                unitValue: unitValue,
                purchaseDate: purchaseDate,
                buyMore: buyMore
            };

            updateItem(item);
        } else {
            const item = {
                uuid: uuidv1(),
                name: name,
                unitValue: unitValue,
                purchaseDate: purchaseDate,
                buyMore: buyMore
            };

            saveItem(item);
        }
    };

    _delete = () => {
        const { uuid } = this.state;

        const { removeItem } = this.props;

        if (uuid.length > 0) {
            removeItem(uuid);
        }
    };

    /** VALIDAÇÕES */

    _showErrorName = () => {
        const { name } = this.state;
        if (name.length <= 0) {
            return false;
        }
        return !validate.isNameValid(name);
    };

    _helperTextTypeName = () => {
        const { name } = this.state;
        return name.length <= 0 ? "info" : "error";
    };

    _showErrorPurchaseDate = () => {
        const { purchaseDate } = this.state;
        if (purchaseDate.length <= 0) {
            return false;
        }
        return !validate.isDateValid(purchaseDate);
    };

    _helperTextTypePurchaseDate = () => {
        const { purchaseDate } = this.state;
        return purchaseDate.length <= 0 ? "info" : "error";
    };

    _verifiedFields = () => {
        const { name, purchaseDate, unitValue } = this.state;

        return (
            validate.isNameValid(name) &&
            validate.isDateValid(purchaseDate) &&
            unitValue.length > 0
        );
    };

    render() {
        const { name, unitValue, purchaseDate } = this.state;

        return (
            <ScrollView>
                <Container style={{ padding: 16 }}>
                    <StatusBar
                        backgroundColor={defaultTheme.primaryDark}
                        barStyle="light-content"
                    />

                    {/** NOME */}

                    <TextInput
                        label="Nome"
                        value={name}
                        onChangeText={text =>
                            this._onChangeHandler("name", text)
                        }
                        returnKeyType="next"
                        error={this._showErrorName()}
                        onSubmitEditing={event =>
                            this.purchaseDateField.current.getElement().focus()
                        }
                        ref={this.nameField}
                    />
                    <HelperText
                        type={this._helperTextTypeName()}
                        visible={name.length <= 0 || this._showErrorName()}
                    >
                        {name.length <= 0
                            ? "Campo obrigatório"
                            : "Nome inválido!"}
                    </HelperText>

                    {/** UNIDADES DE MEDIDA */}

                    <RadioButton.Group
                        onValueChange={value =>
                            this.setState({ unitValue: value })
                        }
                        value={unitValue}
                    >
                        <Container row style={styles.radioContainer}>
                            <RadioButton value="kg" />
                            <Text style={styles.radioSpace}>Kg</Text>
                            <RadioButton value="Lt" />
                            <Text style={styles.radioSpace}>Lt</Text>
                            <RadioButton value="Unid" />
                            <Text style={styles.radioSpace}>Unid</Text>
                            <RadioButton value="Lata" />
                            <Text>Lata</Text>
                        </Container>
                    </RadioButton.Group>

                    {/** DATA COMPRA */}

                    <TextInput
                        label="Data da compra"
                        value={purchaseDate}
                        onChangeText={text =>
                            this._onChangeHandler("purchaseDate", text)
                        }
                        returnKeyType="done"
                        error={this._showErrorPurchaseDate()}
                        render={props => (
                            <TextInputMask
                                {...props}
                                type={"datetime"}
                                options={{
                                    format: "DD/MM/YYYY"
                                }}
                                ref={this.purchaseDateField}
                            />
                        )}
                    />
                    <HelperText
                        type={this._helperTextTypePurchaseDate()}
                        visible={
                            purchaseDate.length <= 0 ||
                            this._showErrorPurchaseDate()
                        }
                    >
                        {purchaseDate.length <= 0
                            ? "Campo obrigatório"
                            : "Data de nascimento inválida!"}
                    </HelperText>
                </Container>
                <Loading loading={this.props.item.loading} />
            </ScrollView>
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
)(RegisterScreen);
