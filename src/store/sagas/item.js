import { call, put } from "redux-saga/effects";
import { itemActions } from "../ducks/item";
import NavigationService from "../../navigation/NavigationService";

import { asyncStorageUtil } from "../../utils";

export function* saveSaga(action) {
    try {
        const retrieveItems = yield call(asyncStorageUtil.findAllItems);

        let items = [];

        if (retrieveItems !== null) {
            items = JSON.parse(retrieveItems);
            items = [...items, action.payload];
        } else {
            items = [...items, action.payload];
        }

        yield call(asyncStorageUtil.save, JSON.stringify(items));
        yield put(itemActions.saveItemSuccess());
        NavigationService.back();
    } catch (error) {
        yield put(itemActions.saveItemError(error));
    }
}

export function* updateSaga(action) {
    try {
        const retrieveItems = yield call(asyncStorageUtil.findAllItems);

        if (retrieveItems !== null) {
            const items = JSON.parse(retrieveItems);

            const index = items.findIndex(
                item => item.uuid === action.payload.uuid
            );

            if (index !== -1) {
                items[index].uuid = action.payload.uuid;
                items[index].name = action.payload.name;
                items[index].unitValue = action.payload.unitValue;
                items[index].purchaseDate = action.payload.purchaseDate;
                items[index].buyMore = action.payload.buyMore;
            }

            yield call(asyncStorageUtil.save, JSON.stringify(items));
            yield put(itemActions.updateItemSuccess());
        }
    } catch (error) {
        yield put(itemActions.updateItemError(error));
    }
}

export function* removeSaga(action) {
    try {
        const storage = yield call(asyncStorageUtil.findAllItems);
        const items = JSON.parse(storage);

        let removed = items.filter(item => item.uuid !== action.payload);
        yield call(asyncStorageUtil.save, JSON.stringify(removed));
        yield put(itemActions.removeItemSuccess(removed));
        NavigationService.back();
    } catch (error) {
        yield put(itemActions.removeItemError(error));
    }
}

export function* findAllSaga() {
    try {
        const storage = yield call(asyncStorageUtil.findAllItems);
        yield put(itemActions.findAllItemsSuccess(JSON.parse(storage)));
    } catch (error) {
        yield put(itemActions.findAllItemsError(error));
    }
}
