import React from "react";
import { createStackNavigator } from "react-navigation";

import MainScreen from "../../screens/MainScreen";
import RegisterScreen from "../../screens/RegisterScreen";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
    HeaderButtons,
    HeaderButton,
    Item
} from "react-navigation-header-buttons";

import { screens } from "../../config";
import { defaultTheme } from "../../styles/themes";
import { colors } from "../../styles";

const MaterialHeaderButton = props => (
    <HeaderButton
        {...props}
        IconComponent={MaterialIcons}
        iconSize={23}
        color={colors.white}
    />
);

const MainNavigator = createStackNavigator(
    {
        [screens.MainScreen]: {
            screen: MainScreen,
            navigationOptions: {
                title: "Meus items"
            }
        },
        [screens.RegisterScreen]: {
            screen: RegisterScreen,
            navigationOptions: ({ navigation }) => ({
                title: "Cadastrar",
                headerRight:
                    navigation.getParam("item", null) !== null ? (
                        <HeaderButtons
                            HeaderButtonComponent={MaterialHeaderButton}
                        >
                            <Item
                                title="delete"
                                iconName="delete"
                                onPress={navigation.getParam("delete")}
                            />
                            <Item
                                title="save"
                                iconName="done"
                                onPress={navigation.getParam("save")}
                            />
                        </HeaderButtons>
                    ) : (
                        <HeaderButtons
                            HeaderButtonComponent={MaterialHeaderButton}
                        >
                            <Item
                                title="save"
                                iconName="done"
                                onPress={navigation.getParam("save")}
                            />
                        </HeaderButtons>
                    )
            })
        }
    },
    {
        initialRouteName: screens.MainScreen,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: defaultTheme.primary
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
                fontWeight: "bold"
            }
        },
        headerBackTitleVisible: false
    }
);

export default MainNavigator;
