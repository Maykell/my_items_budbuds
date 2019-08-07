import { all, takeLatest } from "redux-saga/effects";

import { itemTypes } from "../ducks/item";
import { saveSaga, updateSaga, removeSaga, findAllSaga } from "../sagas/item";

export default function* rootSaga() {
    yield all([
        takeLatest(itemTypes.SAVE, saveSaga),
        takeLatest(itemTypes.UPDATE, updateSaga),
        takeLatest(itemTypes.REMOVE, removeSaga),
        takeLatest(itemTypes.FIND_ALL, findAllSaga)
    ]);
}
