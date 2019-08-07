import Reactotron, {
    networking,
    trackGlobalErrors
} from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

if (__DEV__) {
    const tron = Reactotron.configure({ host: "192.168.1.105" })
        .useReactNative()
        .use(reactotronRedux())
        .use(sagaPlugin())
        .use(networking())
        .use(trackGlobalErrors())
        .connect();

    tron.clear();

    console.tron = tron;
}
