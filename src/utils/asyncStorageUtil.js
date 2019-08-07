import AsyncStorage from "@react-native-community/async-storage";

const setToken = async value => {
    try {
        await AsyncStorage.setItem("@app:token", value);
    } catch (error) {
        console.log("setToken: AsyncStorageUtil -> ", error);
    }
};

const getToken = async () => {
    try {
        return await AsyncStorage.getItem("@app:token");
    } catch (error) {
        console.log("getToken: AsyncStorageUtil -> ", error);
    }
};

const save = async value => {
    try {
        await AsyncStorage.setItem("@app:items", value);
    } catch (error) {
        console.log("save: AsyncStorageUtil -> ", error);
    }
};

const findAllItems = async () => {
    try {
        return await AsyncStorage.getItem("@app:items");
    } catch (error) {
        console.log("findAllItems: AsyncStorageUtil -> ", error);
    }
};

export default { setToken, getToken, save, findAllItems };
